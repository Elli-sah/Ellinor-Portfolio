// import React from "react";
// import { Index } from "elasticlunr";
// import { Link } from "gatsby";

// const Search = ({ searchQuery, onChange, searchIndex }) => {
//   const index = Index.load(searchIndex);

//   const search = (query) => {
//     const results = query
//       ? index
//           .search(query, {})
//           .map(({ ref }) => index.documentStore.getDoc(ref))
//       : [];

//     // Render the updated results
//     return (
//       <ul>
//         {results.map((page) => (
//           <li key={page.id}>
//             <Link to={"/" + page.path}>{page.title}</Link>
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={onChange}
//         placeholder="Search Projects"
//       />
//       {search(searchQuery)}
//     </div>
//   );
// };

// export default Search;
