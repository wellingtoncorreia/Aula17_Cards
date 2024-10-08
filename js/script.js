// Arquivo de script vazio 
function ModalSuccess(){
    Swal.fire({
        title: "Que legal!",
        text: "Item adicionado ao carrinho",
        icon: "success"
      });
}

function Bag(){
    Swal.fire({
        title: "Deseja finalizar a compra?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, Finalizar"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Finalizado",
            text: "Compra finalizada!",
            icon: "success"
          });
        }
      });
}
