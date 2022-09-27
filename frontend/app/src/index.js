import {
  getStudentList,
  getStudentDetail,
  createStudent,
  updateStudent,
  deleteStudent,
} from "./api/student.js";

let store = {
  studentDetail: null,
};

const renderStudentList = async () => {
  const list = await getStudentList();
  const contentHtml = list
    .reverse()
    .map(
      (item, index) => `<tr>
    <th scope="row">${(index += 1)}</th>
    <td>${item.name}</td>
    <td>${item.age}</td>
    <td>${item.numberClass}</td>
    <td>
      <button type="button" class="btn btn-outline-danger"
      onclick="handleDelete('${item.id}')"
      >
        Delete
      </button>
      <button
        type="button"
        class="btn btn-outline-info"
        data-toggle="modal"
        data-target="#studentModal"
        onclick="handleEdit('${item.id}')"
      >
        Edit
      </button>
    </td>
  </tr>`
    )
    .reduce((sumString, item) => (sumString += item), "");
  document.getElementById("tbody").innerHTML = contentHtml;
};
renderStudentList();

const handleEdit = async (id) => {
  document.getElementById("title-model").innerHTML = "Update Student Info";
  document.getElementById("addStudent").style["display"] = "none";
  document.getElementById("updateStudent").style["display"] = "block";
  const student = await getStudentDetail(id);
  document.getElementById("name").value = student.name;
  document.getElementById("class").value = student.numberClass;
  document.getElementById("age").value = student.age;
  store.studentDetail = student;
};
window.handleEdit = handleEdit;
document.getElementById("btnPopupModalAdd").addEventListener("click", () => {
  document.getElementById("title-model").innerHTML = "Add student";
  document.getElementById("addStudent").style["display"] = "block";
  document.getElementById("updateStudent").style["display"] = "none";
  document.getElementById("name").value = "";
  document.getElementById("class").value = "";
  document.getElementById("age").value = "";
});

document.getElementById("addStudent").addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  const numberClass = +document.getElementById("class").value;
  const age = +document.getElementById("age").value;
  const student = { name, age, numberClass };
  await createStudent(student);
  await renderStudentList();
  $("#modalMessage").modal("show");
  $("#studentModal").modal("hide");
});

document.getElementById("updateStudent").addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  const numberClass = +document.getElementById("class").value;
  const age = +document.getElementById("age").value;
  const { id } = store.studentDetail;
  const student = { name, age, numberClass };

  await updateStudent(id, student);

  await renderStudentList();
  $("#modalMessage").modal("show");
  $("#studentModal").modal("hide");
});

const handleDelete = async (id) => {
  await deleteStudent(id);
  await renderStudentList();
  $("#modalMessage").modal("show");
};
window.handleDelete = handleDelete;
