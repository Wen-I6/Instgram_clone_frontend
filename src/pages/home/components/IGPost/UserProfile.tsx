import { useParams } from "react-router-dom";
import { useGetPostsByAccountQuery } from "services/userService";
import IGHeader from "components/IGHeader";
import IGUser from "components/IGUser";
import Comment from "./Comment";
import Loading from "components/Loading";

const UserProfile = () => {
  const { account } = useParams();
  const {
    data: posts,
    isLoading,
    error,
  } = useGetPostsByAccountQuery(account || "");

  return (
    <>
      <IGHeader />
      <div className="flex flex-col gap-8">
        {isLoading && (
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        )}
        {!isLoading && !posts?.length ? (
          <div>User not found or has no posts.</div>
        ) : (
          posts?.map((post) => (
            <div key={post.id} className="shadow-md pb-4 lg:mb-8">
              <IGUser
                account={post.account}
                location={post.location}
                avatar={post.avatar}
              />
              <img
                src={post.photo}
                alt="post"
                className="w-full object-cover"
              />
              <Comment
                avatar={post.avatar}
                account={post.account}
                likes={post.likes}
                description={post.description}
                hashTags={post.hashTags}
                createTime={post.createTime}
              />
            </div>
          ))
        )}
        {error && (
          <div className="flex justify-center items-center">
            <p>Error: {error}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
