import { useAppDispatch } from "hooks";
import { follow, unfollow } from "slices/friendSlice";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

type IGUserProps = {
  size?: "medium" | "small";
  showfollow?: boolean;
  isFillowing?: boolean;
  account?: string;
  location?: string;
  avatar?: string;
  id?: number;
};

const IGUser: React.FC<IGUserProps> = memo(
  ({
    size = "small",
    showfollow = false,
    isFillowing = false,
    account,
    location,
    avatar,
    id,
  }) => {
    const dispatch = useAppDispatch();

    const followClickHandler = () => {
      if (id === undefined) return;
      if (isFillowing) {
        dispatch(unfollow(id));
      } else {
        dispatch(follow(id));
      }
    };

    const navigate = useNavigate();

    const goToAccount = (account: string) => {
      navigate(`account/${account}`);
    };

    return (
      <div
        className="flex h-[70px] items-center box-border px-4"
        onClick={() => goToAccount(account || "")}
      >
        <div
          className={`${
            size === "small" ? "w-[40px] h-[40px]" : "w-[60px] h-[60px]"
          } overflow-hidden rounded-full`}
          style={{
            backgroundImage: `url(${avatar})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="ml-4">
          <p className="font-bold text-sm">{account}</p>
          <p className="text-gray-400 text-xs">{location}</p>
        </div>
        {showfollow && (
          <p
            className={`${
              isFillowing ? "text-gray-700" : "text-blue-400"
            } ml-auto text-xs cursor-pointer`}
            onClick={followClickHandler}
          >
            {isFillowing ? "FOLLOWING" : "FOLLOW"}
          </p>
        )}
      </div>
    );
  }
);

export default IGUser;
