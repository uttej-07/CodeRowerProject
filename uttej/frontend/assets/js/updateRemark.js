function submitConfig() {
  let config = $("#configToLoad").val();
  let remark = $("#remarkId").val();
  $.ajax({
    url: `http://localhost:4000/configuration/${config}`,
    method: "PUT",
    data: {
      remark,
    },
    success: function (response) {
      response = JSON.stringify(response);
      const data = JSON.parse(response);
      console.log(data);
      if (data) {
        Swal.fire({
          title: "Success",
          icon: "success",
        });
      }
    },
    error: function (response) {
      let data = JSON.parse(response);
      console.log(data);
    },
  });
}
