function Todoitemm1() {
  let todoNamme = "Buy milk";
  let todoDate = "4/10/2023";
  return (
    <div class="container">
      <div class="row ab-row">
        <div class="col-6">{todoNamme}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger ab-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitemm1;
