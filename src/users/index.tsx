import { UserType, UserProps } from "../type";

function Users(props: UserProps) {
  const { data } = props;
  return (
    <div className="user_list">
      {data?.map((res: UserType) => (
        <div key={res.ID} className="user">
          <div className="avtar">
            <h3>{res.Company.charAt(0)}</h3>
          </div>
          <div className="details">
            <span className="company_name">{res.Company}</span>
            <div className="detail_info">
              <span className="company_details">
                Name:
                <span className="particular_sec">{res.FirstNameLastName}</span>
              </span>
              <span className="company_details">
                Email:<span className="particular_sec">{res.Email}</span>
              </span>
              <span className="company_details">
                Phone:<span className="particular_sec">{res.Phone}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
