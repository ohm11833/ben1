function changeHouse(videoPath, arUrl, element) {
    // 1. เปลี่ยนวิดีโอ (Video Tag Logic)
    let videoPlayer = document.getElementById('main-video');
    
    // กำหนด Source ใหม่
    videoPlayer.src = videoPath;
    
    // สั่งให้โหลดและเล่นใหม่
    videoPlayer.load();
    videoPlayer.play();
    
    // 2. เปลี่ยนลิงก์ปุ่ม AR (Link)
    document.getElementById('ar-link').href = arUrl;

    // 3. เปลี่ยนชื่อหัวข้อ
    let houseName = element.querySelector('h3').innerText;
    document.getElementById('current-title').innerText = "วิดีโอตัวอย่าง: " + houseName;

    // 4. เปลี่ยนสีกรอบ (Active State)
    let cards = document.querySelectorAll('.house-card');
    cards.forEach(card => card.classList.remove('active'));
    element.classList.add('active');
}// JavaScript Document