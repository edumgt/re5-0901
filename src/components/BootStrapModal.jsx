import { useRef } from "react";
import { Modal } from "bootstrap";

function MemberFormModal() {
  const modalRef = useRef(null);

  const openModal = () => {
    const modal = new Modal(modalRef.current);
    modal.show();
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={openModal}>
        회원 등록
      </button>

      <div className="modal fade" tabIndex="-1" ref={modalRef}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">회원정보 입력</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="닫기"></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">이름</label>
                  <input type="text" className="form-control" placeholder="홍길동" />
                </div>
                <div className="mb-3">
                  <label className="form-label">이메일</label>
                  <input type="email" className="form-control" placeholder="example@email.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label">전화번호</label>
                  <input type="tel" className="form-control" placeholder="010-1234-5678" />
                </div>
                <div className="mb-3">
                  <label className="form-label">주소</label>
                  <textarea className="form-control" rows="2"></textarea>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                닫기
              </button>
              <button type="button" className="btn btn-primary">
                저장
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberFormModal;
