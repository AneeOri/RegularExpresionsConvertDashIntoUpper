import "./styles.css";

export default function App() {
  function DashIntoUpperCase(str) {
    str = str.replace(/(^\w|[_-]\w)/g, (match) => match.toUpperCase());
    str = str.replace(/(^|[_-]\w)/g, (match) => match.toUpperCase());
    str = str.replace(/[_-]/g, "");

    console.log(str);
  }

  function toCamelCase(str) {
    var regExp = /[-_]\w/gi;
    return str.replace(regExp, function (match) {
      return match.charAt(1).toUpperCase();
    });
  }

  function toCamelCase2(str) {
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  }

  function toCamelCase3(str) {
    return str.replace(/[^a-z]./gi, (x) => x.toUpperCase().slice(-1));
  }

  toCamelCase("hello-my_darling");
  return (
    <div className="App">
      <input />
    </div>
  );
}
