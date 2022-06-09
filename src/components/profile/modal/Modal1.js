import React from "react";
import "./modal1.css";
const Modal1 = () => {
  return (
    <div class="modal fade" style={{ display: "block" }}>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  //   return (
  //     <div class="modal modal-sec  ">
  //       <div class="modal-dialog modal-dialog-1  modal-dialog-centered ">
  //         <div class="modal-content modal-content-1">
  //           <div class="modal-body modal-body-1 ">
  //             <div className="row">
  //               <div className="col-6">a</div>
  //               <div className="col-6">b</div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
};

export default Modal1;
