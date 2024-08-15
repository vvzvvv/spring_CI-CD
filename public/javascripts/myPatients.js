// 환자 검색 기능
function searchPatients() {
    const searchInput = document.getElementById('patient-search').value.toLowerCase();
    const patientTable = document.getElementById('patientSearchResults');
    const rows = patientTable.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const emailCell = rows[i].getElementsByTagName('td')[0];
        const nameCell = rows[i].getElementsByTagName('td')[1];

        if (emailCell || nameCell) {
            const emailText = emailCell.textContent.toLowerCase();
            const nameText = nameCell.textContent.toLowerCase();

            if (emailText.includes(searchInput) || nameText.includes(searchInput)) {
                rows[i].style.display = ''; // 검색어와 일치하는 행을 표시
            } else {
                rows[i].style.display = 'none'; // 검색어와 일치하지 않는 행을 숨김
            }
        }
    }
}


// 요청 취소 기능
function cancelRequest(doctorId, userId) {
    fetch('/doctor_main/cancelRequest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ doctorId, userId })
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            // 요청 취소 후 UI에서 해당 요청 제거하기
            const requestTable = document.getElementById('requestListResults');
            requestTable.querySelector(`tr[data-user-id="${userId}"]`).remove();
        } else {
            alert(result.message);
        }
    });
}

// 환자 마이페이지 열람 기능
function viewPatient(userId) {
    window.location.href = `/doctor_main/board/${userId}`;
}


// 요청 보낸 목록 불러오기
function loadRequestList(doctorId) {
    fetch(`/doctor_main/getRequestList/${doctorId}`)
        .then(response => response.json())
        .then(data => {
            const requestTable = document.getElementById('requestListResults');
            requestTable.innerHTML = ''; // 기존 내용 초기화

            data.forEach(request => {
                const row = document.createElement('tr');
                row.setAttribute('data-user-id', request.userId);
                row.innerHTML = `
                    <td>${request.email}</td>
                    <td>${request.name}</td>
                    <td><button type="button" class="doctor_main-button" onclick="cancelRequest(${doctorId}, '${request.userId}')">취소</button></td>
                `;
                requestTable.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching request list:', error));
}

// 페이지 로드 시 요청 보낸 목록을 불러와용
document.addEventListener('DOMContentLoaded', function() {
    const doctorId = 1; // 일단 1
    loadRequestList(doctorId);
});
