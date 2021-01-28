const Pagination = (props) => {
  let length = Math.ceil(props.list.length / 3);
  let pages = new Array(length).fill(1);
 
  return (
    <div>
      {props.list.length !== 0 ? (
        <div className="d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <button className="page-link">Previous</button>
              </li>
              {pages.map((ele, index) => (
                <li className="page-item" key={index}>
                  <button className="page-link">{index+1}</button>
                </li>
              ))}

              <li className="page-item">
                <button className="page-link">Next</button>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default Pagination;
