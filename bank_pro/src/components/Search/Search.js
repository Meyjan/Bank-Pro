import React, { Component } from "react";
import SearchForm from "./SearchForm";
import "./Search.css";

const searchNIM = `https://api.stya.net/nim/byid?query=`;
const searchName = `https://api.stya.net/nim/byname?name=`;
const numRegex = new RegExp(/^\d+$/);

/**
 * Merupakan class yang menangani pencarian detail dari nama atau NIM
 */
class Search extends Component {
  state = {
    found: 0,
    result: undefined,
    totalPage: 0
  };

  /**
   * Merupakan method yang menangani searching berdasarkan nama atau NIM
   * Jika query berisi angka semua, pencarian berdasarkan NIM. Jika tidak, berdasarkan nama.
   * Setelah itu, lakukan HTTP GET pada API dengan header token lalu menampilkan tabel hasil HTTP request
   */
  handleSearch = async e => {
    e.preventDefault();

    const searchQuery = e.target.elements.finder.value;

    let urlLink = numRegex.test(searchQuery) ? searchNIM : searchName;
    urlLink += searchQuery;
    urlLink += `&count=10`;

    let search_call = await fetch(urlLink, {
      method: "GET",
      headers: {
        "Auth-Token": this.props.authToken
      }
    });
    let data = await search_call.json();

    if (data.code <= 0) {
      this.setState({ found: -1 });
    } else {
      let temp = [];
      let resp = data.code;
      let i = 1;

      while (resp > 0) {
        for (const i in data.payload) {
          temp.push([
            data.payload[i].name,
            data.payload[i].nim_tpb,
            data.payload[i].nim_jur,
            data.payload[i].prodi
          ]);
        }
        let urlLink2 = urlLink + `&page=` + i;
        search_call = await fetch(urlLink2, {
          method: "GET",
          headers: {
            "Auth-Token": this.props.authToken
          }
        });
        data = await search_call.json();
        resp = data.code;
        i += 1;
      }

      this.setState({ result: temp });

      console.log(this.state.result);
      this.setState({ totalPage: resp === 0 ? i - 1 : i });
      this.setState({ found: 1 });
    }
  };

  render() {
    return (
      <div className="search-wrapper">
        <div className="column">
          <h5>
            <br />
          </h5>
          <div className="search-text-wrapper">
            <h2>Enter NIM or Name</h2>
            <SearchForm onSearch={this.handleSearch} />
            {this.state.found === -1 && <h4>Nothing Found...</h4>}
            {this.state.found === 1 && <h4>Results...</h4>}
          </div>
          {this.state.found === 1 && (
            <div className="overflow-auto">
              <table className="table table-striped table-bordered table-sm">
                <thead className="thead-dark">
                  <tr>
                    <th className="th-sm" scope="col">
                      Nama
                    </th>
                    <th className="th-sm" scope="col">
                      NIM TPB
                    </th>
                    <th className="th-sm" scope="col">
                      NIM Jurusan
                    </th>
                    <th className="th-sm" scope="col">
                      Prodi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.result.map(res => (
                    <tr key={res[2]}>
                      <td>{res[0]}</td>
                      <td>{res[1]}</td>
                      <td>{res[2]}</td>
                      <td>{res[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
