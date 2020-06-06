import React from "react";
import { DebounceInput } from "react-debounce-input";

const Search = (props: any) => {
  const { handleSearch } = props;
  return (
    <>
      <form>
        <DebounceInput
          debounceTimeout={700}
          type="text"
          placeholder="What do you looking for?"
          onChange={handleSearch}
        />
      </form>
    </>
  );
};

export default Search;
