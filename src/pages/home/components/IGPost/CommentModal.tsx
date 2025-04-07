type CommentModalProps = {
  account: string;
  description: string;
  likes: number;
  isOpen: boolean;

  onClose: () => void;
};

const CommentModal: React.FC<CommentModalProps> = ({
  account,
  description,
  likes,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div className="px-1">
      <div className="flex justify-between box-border text-sm mt-4 mb-2">
        <div className="flex">
          <span className="font-bold mb-2 px-2">{account}</span>
          <span className="mb-2 px-2">{description}</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm font-semibold pr-1">{likes}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={"h-[20px] w-[20px] mr-2"}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
