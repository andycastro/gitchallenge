import React from "react";
import { SearchInput } from "./search.style";

const Search = (props: any) => {
  const { handleSearch } = props;
  return (
    <>
      <form>
        <SearchInput
          debounceTimeout={700}
          type="text"
          placeholder="Faça sua busca aqui!"
          onChange={handleSearch}
        />
      </form>
    </>
  );
};

export default Search;
