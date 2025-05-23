import Item from "./item";
import { useGetIGStoryQuery } from "services/homeServices";
import Loading from "components/Loading";

const IGStory: React.FC = () => {
  const { data, isLoading, error } = useGetIGStoryQuery("all");

  // console.log('data', data)
  // console.log('isloading', isLoading)

  // mock data
  // const data = [
  //   {
  //     id: 1,
  //     name: "bruce_fe",
  //     avatar: "/images/avatars/a1.png",
  //   },
  //   {
  //     id: 2,
  //     name: "max",
  //     avatar: "/images/avatars/a2.png",
  //   },
  //   {
  //     id: 3,
  //     name: "fm",
  //     avatar: "/images/avatars/a3.png",
  //   },
  //   {
  //     id: 4,
  //     name: "joanne",
  //     avatar: "/images/avatars/a4.png",
  //   },
  //   {
  //     id: 5,
  //     name: "focus",
  //     avatar: "/images/avatars/a5.png",
  //   },
  //   {
  //     id: 6,
  //     name: "louis",
  //     avatar: "/images/avatars/a6.png",
  //   },
  //   {
  //     id: 7,
  //     name: "alvin",
  //     avatar: "/images/avatars/a7.png",
  //   },
  //   {
  //     id: 8,
  //     name: "grace",
  //     avatar: "/images/avatars/a8.png",
  //   },
  //   {
  //     id: 9,
  //     name: "rance",
  //     avatar: "/images/avatars/a9.png",
  //   },
  //   {
  //     id: 10,
  //     name: "bruce_fe",
  //     avatar: "/images/avatars/a10.png",
  //   },
  // ];
  if (error) {
    return <div className="text-red-500">Failed to load stories.</div>;
  }

  return (
    <div className="w-full h-[110px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar lg:my-8">
      {isLoading && (
        <div className="flex justify-center w-full">
          <Loading />
        </div>
      )}
      {!isLoading &&
        data?.map((item) => {
          const { id, name, avatar } = item;
          return <Item key={id} name={name} avatar={avatar} />;
        })}
      {!isLoading && data?.length === 0 && <p>No stories found</p>}
    </div>
  );
};

export default IGStory;
