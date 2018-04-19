<template>
  <div id="prescription-detail-page" class="container" v-if="prescription!=null || prescription!=undefined || prescription.length!=0">

    <h3 class="text-left">Prescription Detail : {{prescription[0].prescriptionId}}</h3>
    <h6 class="text-left">Status:
      <span v-if="prescription[0].status==='PENDING'" class="text-warning">{{prescription[0].status}}</span>
      <span v-else-if="prescription[0].status==='REJECT'" class="text-danger">{{prescription[0].status}}</span>
      <span v-else-if="prescription[0].status==='ACCEPTED'" class="text-success">{{prescription[0].status}}</span>
    </h6>

    <div class="row pt-2 pb-2">
      <div class="col-4 text-left">
        Doctor: {{prescription[0].doctor}}
      </div>
      <div class="col-4 text-left">
        Patient: {{prescription[0].patient}}
      </div>
      <div class="col-4 text-left">
        Date: {{prescription[0].date}}
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
          <!--<th scope="col"></th>-->
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in prescription">
          <th scope="row">{{index}}</th>
          <td>{{item.medicine}}</td>
          <td>{{item.medicineDesc}}</td>
          <!--<td><input type="number" class="form-control" value="2"/></td>-->
          <td>{{item.amount}}</td>
          <td>Dose(s)</td>
          <!--<td><button type="button" class="btn btn-outline-secondary">Print</button></td>-->
        </tr>
        </tbody>
      </table>
    </div>

    <hr>

    <div class="row">
      <div class="col-12">
        <label class="w-100 text-left">Note:</label>
        <textarea rows="8" class="form-control" v-model="prescription[0].note" v-if="prescription[0].status==='PENDING'"></textarea>
        <p class="text-left" v-else>{{prescription[0].note}}</p>
      </div>
    </div>

    <div class="row mt-3 mb-3">
      <div class="col-12 text-right">
        <!--<button type="button" class="btn btn-danger">Back</button>-->
        <button type="button" class="btn btn-outline-primary">Back</button>
        <button type="button" class="btn btn-danger" v-if="prescription[0].status==='PENDING'" @click="rejectPrescription">Reject</button>
        <button type="button" class="btn btn-success" v-if="prescription[0].status==='PENDING'" @click="acceptPrescription">Accept</button>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'PrescriptionDetailPage',
    data () {
      return {
        prescription: []
      }
    },
    methods: {
      rejectPrescription: async function () {
        let request = {
          prescriptionId: this.prescription[0].prescriptionId,
          pharmarcistId: '000008',
        }
        const options = {
          method: 'POST',
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
        }
        try {
          await axios.post('http://localhost:3000/reject/prescription', request, options)
          this.$router.push('/')
        } catch (error) {
          console.log(error)
        }
      },
      acceptPrescription: async function () {
        let request = {
          prescriptionId: this.prescription[0].prescriptionId,
          pharmarcistId: '000008',
          note: this.prescription[0].note,
        }
        const options = {
          method: 'POST',
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
        }
        try {
          await axios.post('http://localhost:3000/accept/prescription', request, options)
          this.$router.push('/')
        } catch (error) {
          console.log(error)
        }
      }
    },
    async created() {
      try {
        let prescriptionId = this.$route.params.prescriptionId
        const prescription = await axios.get('http://localhost:3000/prescriptions/' + prescriptionId)
        this.prescription = prescription.data.data
        console.log(this.prescription)
      } catch (error) {
        console.log(error)
      }

    }
  }
</script>

<style>

</style>
