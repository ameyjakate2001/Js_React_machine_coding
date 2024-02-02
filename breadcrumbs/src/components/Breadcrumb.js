import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const BreadCrumb = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/").filter((x) => x);
  return (
    <div className="breadcrumb">
      <Link to="/">Home {paths.length > 0 && " / "}</Link>
      {paths.map((path, index) => {
        return (
          <span key={path}>
            {index === paths.length - 1 ? (
              path
            ) : (
              <Link to="products">
                {path} {paths[index + 1] && "/"}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
};
export default BreadCrumb;
