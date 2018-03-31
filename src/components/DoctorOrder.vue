<template>
  <div id="doctor-order" class="container">
    <div class="row">
      <div class="col-12">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">ID</span>
          </div>
          <input type="text" class="form-control" placeholder="Patient ID" aria-label="id">
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        Name: Pawat
      </div>
      <div class="col-6">
        Surname: Yuttateeranont
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        Age: 24
      </div>
      <div class="col-6">
        Sex: Male
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        Allergy history: None
      </div>
    </div>

    <div class="text-center">
      <table class="table center-align">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Drug Name</th>
          <th scope="col">Amount</th>
          <th scope="col">Unit</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Aspirin</td>
          <td>2</td>
          <td>Dose(s)</td>
          <td>
            <button type="button" class="btn btn-outline-warning">Edit</button>
            <button type="button" class="btn btn-outline-danger">Delete</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Mendilex</td>
          <td>10</td>
          <td>Pill(s)</td>
          <td>
            <button type="button" class="btn btn-outline-warning">Edit</button>
            <button type="button" class="btn btn-outline-danger">Delete</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td><input type="text" class="form-control" placeholder="drug name"/></td>
          <td><input type="number" class="form-control" placeholder="amount"/></td>
          <td><input type="text" class="form-control" placeholder="unit"/></td>
          <td><button type="button" class="btn btn-block btn-primary">Add</button></td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="row">
      <div class="col-6">
        <label class="w-100 text-left">Note:</label>
        <textarea class="form-control"></textarea>
      </div>

      <div class="col-6">
        <div class="row">
          <div class="col-6">
            <button type="button" class="btn btn-success">Submit</button>
          </div>
          <div class="col-6">
            <button type="button" class="btn btn-danger">Cancel</button>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'DoctorOrder'
  }
</script>

<style>

</style>
