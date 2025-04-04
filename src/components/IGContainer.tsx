const IGContainer: React.FC = ({ children }) => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto sm:max-w-full">{children}</div>
    </>
  );
};

export default IGContainer;
