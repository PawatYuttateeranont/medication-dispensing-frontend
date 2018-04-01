<template>
  <div id="prescription-detail-page" class="container">

    <h3 class="text-left">Prescription Detail : 00001</h3>
    <h6 class="text-left">Status: <span class="text-warning">Pending</span></h6>

    <div class="row pt-2 pb-2">
      <div class="col-4 text-left">
        Doctor: Doctor A
      </div>
      <div class="col-4 text-left">
        Patient: Pawat Yuttateeranont
      </div>
      <div class="col-4 text-left">
        Date: 31/03/2018
      </div>
    </div>

    <div class="text-center mt-3 mb-3">
      <table class="table center-align">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Drug Name</th>
          <th scope="col">Use of Drug</th>
          <th scope="col">Amount</th>
          <th scope="col">Unit</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Aspirin</td>
          <td><textarea rows="5" class="form-control">Take one by month daily in the morning.</textarea></td>
          <td><input type="number" class="form-control" value="2"/></td>
          <td>Dose(s)</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Mendilex</td>
          <td><textarea rows="5" class="form-control">Take one by month daily before lunch.</textarea></td>
          <td><input type="number" class="form-control" value="10"/></td>
          <td>Pill(s)</td>
        </tr>
        </tbody>
      </table>
    </div>

    <hr>

    <div class="row">
      <div class="col-12">
        <label class="w-100 text-left">Note:</label>
        <textarea rows="8" class="form-control"></textarea>
      </div>
    </div>

    <div class="row mt-3 mb-3">
      <div class="col-12 text-right">
        <button type="button" class="btn btn-danger">Cancel</button>
        <button type="button" class="btn btn-success">Submit</button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'PrescriptionDetailPage'
  }
</script>

<style>

</style>
