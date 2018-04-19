<template>
  <div id="prescription-page" class="container">
    <h3 class="text-left">Prescription</h3>

    <div class="text-center mt-3 mb-3">
      <table class="table center-align">
        <thead>
        <tr>
          <th scope="col">Prescription ID</th>
          <th scope="col">Doctor</th>
          <th scope="col">Patient</th>
          <th scope="col">Status</th>
          <th scope="col">Date</th>
          <th scope="col">Accpeted / Reject By</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="prescription in prescriptions">
          <th scope="row">{{prescription.prescriptionId}}</th>
          <td>{{prescription.doctor}}</td>
          <td>{{prescription.patient}}</td>
          <td v-if="prescription.status=='PENDING'" class="text-warning">{{prescription.status}}</td>
          <td v-else-if="prescription.status=='REJECT'" class="text-danger">{{prescription.status}}</td>
          <td v-else-if="prescription.status=='SUCCESS'" class="text-success">{{prescription.status}}</td>
          <td>{{prescription.date}}</td>
          <td v-if="prescription.by===null || prescription.by===''">-</td>
          <td v-else>{{prescription.by}}</td>
          <td>
            <router-link to="/detail"><button type="button" class="btn btn-outline-primary">Detail</button></router-link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'PrescriptionPage',
    data () {
      return {
        prescriptions: []
      }
    },
    async created() {
      try {
        const prescriptions = await axios.get('http://localhost:3000/prescriptions')
        this.prescriptions = prescriptions.data.data
        console.log(this.prescriptions)

      } catch (error) {
        console.log(error)
      }

    }
  }
</script>

<style>

</style>
