const Image = ({localPath, ...extraProps}) => {
  let url = localPath ? `${import.meta.env.VITE_BASE_URL}/${localPath}` : ``;
  return (
    <img src={`${url}`} {...extraProps} />
  );
}

export default Image;