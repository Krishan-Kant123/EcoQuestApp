import React from 'react'

const ReportPage = () => {
  return (
    <div>
      <form class=" d-flex flex-column justify-content-center align-items-center was-validated mt-5">
  <div class="mb-3">
    <label for="validationTextarea text-center mb-3" class="form-label">Information</label>
    <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
    <div class="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>

  <div class="form-check mb-3">
    <input type="checkbox" class="form-check-input" id="validationFormCheck1" required/>
    <label class="form-check-label" for="validationFormCheck1">Agree to the consent</label>
    <div class="invalid-feedback"></div>
  </div>


 

  <div class="mb-3">
    <input type="file" class="form-control" aria-label="file example" required/>
    <div class="invalid-feedback"></div>
  </div>

  <div class="mb-3">
    <button class="btn btn-success" type="submit" >Submit form</button>
  </div>
</form>
    </div>
  )
}

export default ReportPage