import UpgradedVideo from "./UpgradedVideo";

function UpgradedVideoList(props) {
  return props.list.map(item => <UpgradedVideo url={item.url} date={item.date} />);
}

export default UpgradedVideoList;