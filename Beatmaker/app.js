class DrumKit {
  constructor() {
    this.playBtn = document.querySelector(".play");
    this.pads = document.querySelectorAll(".pad");
    this.kickSound = document.querySelector(".kick-sound");
    this.snareSound = document.querySelector(".snare-sound");
    this.hihatSound = document.querySelector(".hihat-sound");
    this.selects = document.querySelectorAll("select");
    this.muteBtns = document.querySelectorAll(".mute");
    this.tempoSlider = document.querySelector(".tempo-slider");
    this.index = 0;
    this.bpm = 150;
    this.isPlaying = null;
  }

  activePad() {
    // 여기서 this는 클릭한 pad를 가리킨다.
    this.classList.toggle("active");
  }

  repeat() {
    this.step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b${this.step}`);
    activeBars.forEach((bar) => {
      bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
      if (bar.classList.contains("active")) {
        if (bar.classList.contains("kick-pad")) {
          this.kickSound.currentTime = 0;
          this.kickSound.play();
        }
        if (bar.classList.contains("snare-pad")) {
          this.snareSound.currentTime = 0;
          this.snareSound.play();
        }
        if (bar.classList.contains("hihat-pad")) {
          this.hihatSound.currentTime = 0;
          this.hihatSound.play();
        }
      }
    });
    this.index++;
  }

  play() {
    const interval = (60 / this.bpm) * 1000;
    if (this.isPlaying) {
      clearInterval(this.isPlaying);
      this.isPlaying = null;
    } else {
      this.isPlaying = setInterval(() => {
        this.repeat();
      }, interval);
    }
  }

  updatePlayBtn() {
    if (this.isPlaying) {
      this.playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
      this.playBtn.classList.add("active");
    } else {
      this.playBtn.innerHTML = `<i class="fas fa-play"></i>`;
      this.playBtn.classList.remove("active");
    }
  }

  changeSound(e) {
    const selectedName = e.target.name;
    const selectedValue = e.target.value;

    switch (selectedName) {
      case "kick-select":
        this.kickSound.src = selectedValue;
        break;
      case "snare-select":
        this.snareSound.src = selectedValue;
        break;
      case "hihat-select":
        this.hihatSound.src = selectedValue;
        break;
    }
  }

  mute(e) {
    const clickedBtn = e.target;
    const muteIndex = e.target.getAttribute("data-track");
    clickedBtn.classList.toggle("active");
    if (clickedBtn.classList.contains("active")) {
      switch (muteIndex) {
        case "0":
          this.kickSound.volume = 0;
          clickedBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
          break;
        case "1":
          this.snareSound.volume = 0;
          clickedBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
          break;
        case "2":
          this.hihatSound.volume = 0;
          clickedBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
          break;
      }
    } else {
      switch (muteIndex) {
        case "0":
          this.kickSound.volume = 1;
          clickedBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
          break;
        case "1":
          this.snareSound.volume = 1;
          clickedBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
          break;
        case "2":
          this.hihatSound.volume = 1;
          clickedBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
          break;
      }
    }
  }

  changeTempo(e) {
    const tempoNum = document.querySelector(".tempo-number");
    console.log(e.target);
    tempoNum.innerHTML = e.target.value;
    this.bpm = e.target.value;
  }

  updateTempo() {
    clearInterval(this.isPlaying);
    this.isPlaying = null;
    if (this.playBtn.classList.contains("active")) {
      this.play();
    }
  }
}

const drumKit = new DrumKit();

drumKit.playBtn.addEventListener("click", () => {
  drumKit.play();
  drumKit.updatePlayBtn();
});

drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", drumKit.activePad);
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

drumKit.selects.forEach((select) => {
  select.addEventListener("change", function (e) {
    drumKit.changeSound(e);
  });
});

drumKit.muteBtns.forEach((muteBtn) => {
  muteBtn.addEventListener("click", function (e) {
    drumKit.mute(e);
  });
});

drumKit.tempoSlider.addEventListener("input", (e) => {
  drumKit.changeTempo(e);
});

drumKit.tempoSlider.addEventListener("change", (e) => {
  drumKit.updateTempo();
});
