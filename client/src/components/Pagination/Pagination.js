import cls from "./Pagination.module.css"

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={cls.paginationMenu}>
      <ul className={cls.paginationList}>
        {pageNumbers.map((number) => (
          <li key={number} onClick={() => paginate(number)} className={cls.paginationItem}>
            <span className={cls.page}>
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;