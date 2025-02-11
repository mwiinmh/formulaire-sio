document.addEventListener("DOMContentLoaded", (e)=>{
    e.preventDefault()

    const inputName = document.querySelectorAll('input[type="text"]')

    const btn_submit = document.getElementsByTagName('input')[3]
    btn_submit.addEventListener("click", (e)=>{
        e.preventDefault()
      /*  Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          }); */
    }) 
})