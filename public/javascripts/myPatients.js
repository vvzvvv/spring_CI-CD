// 환자 검색 기능
function searchPatients() {
    const searchInput = document.getElementById('patient-search').value;
    fetch('/doctor_main/searchMyPatients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ doctorId: 1, searchInput }) // doctorId는 예시로 넣은 것입니다.
    })
    .then(response => response.json())
    .then(data => {
        const patientTable = document.getElementById('patientSearchResults');
        patientTable.innerHTML = ''; // 기존 내용을 초기화

        data.forEach(patient => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${patient.email}</td>
                <td>${patient.name}</td>
                <td><button type="button" class="doctor_main-button" onclick="viewPatient('${patient.userId}')">열람</button></td>
            `;
            patientTable.appendChild(row);
        });
    });
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