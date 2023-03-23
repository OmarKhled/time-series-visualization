import parse from "parse-color";
// This function returns the data from its raw format to the google charts format
// [["Time", "Type1", "Type2"],
//  ["12/3",   "1",     "2"],
//  ["13/3",   "3",     "4"]]
const formatData = (
  rawData: { Title: string; Data: { X: string; Y: number }[]; Color: string }[]
) => {
  const formattedData: (string | number | Date)[][] = [[]];
  const colors = rawData.map((set) => parse(set.Color).hex);
  formattedData[0][0] = "Time";
  rawData.forEach((set) => {
    formattedData[0].push(set.Title);
    set.Data.forEach((point, index) => {
      if (!formattedData[index + 1]) {
        formattedData[index + 1] = [new Date(point.X)];
      }
      formattedData[index + 1].push(point.Y);
    });
  });
  return { data: formattedData, colors };
};

export default formatData;