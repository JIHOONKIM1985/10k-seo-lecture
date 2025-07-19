// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileSidebar = document.getElementById('mobileSidebar');
    
    // 햄버거 버튼 클릭 이벤트
    hamburgerBtn.addEventListener('click', function() {
        mobileSidebar.classList.toggle('active');
        
        // 햄버거 버튼 애니메이션
        const spans = this.querySelectorAll('span');
        if (mobileSidebar.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // 사이드바 외부 클릭 시 닫기
    document.addEventListener('click', function(e) {
        if (!mobileSidebar.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            mobileSidebar.classList.remove('active');
            
            // 햄버거 버튼 원래 상태로
            const spans = hamburgerBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // ESC 키로 사이드바 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileSidebar.classList.contains('active')) {
            mobileSidebar.classList.remove('active');
            
            // 햄버거 버튼 원래 상태로
            const spans = hamburgerBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}); 