function submitConfig() {
  let config = $("#configToLoad").val();
  $.ajax({
    url: `http://localhost:4000/configuration/`,
    method: "GET",
    data: {
      id: config,
    },
    success: function (response) {
      response = JSON.stringify(response);
      const data = JSON.parse(response);
      console.log(data[0].data[0]);
      const arr = data[0].data[0].split(",");
      console.log(arr);
      let j = "";

      for (let i = 0; i < 9; i = i + 3) {
        j += `<tr class="">
          <td>${arr[i]}</td>
          <td>${arr[i + 1]}</td>
          <td>${arr[i + 2]}</td>
        </tr>`;
      }

      $("#configRendData").html(j);
    },
    error: function (response) {
      let data = JSON.parse(response);
      console.log(data);
    },
  });
}
