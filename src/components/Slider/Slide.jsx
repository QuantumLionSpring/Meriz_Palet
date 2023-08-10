import React, { Component } from 'react';
import './Slim.css';
import IMG1 from './slide.jpg';
class SliderClip {
    constructor(el) {
        this.el = el;
        this.Slides = Array.from(this.el.querySelectorAll('li'));
        this.Nav = Array.from(this.el.querySelectorAll('nav a'));
        this.totalSlides = this.Slides.length;
        this.current = 0;
        this.autoPlay = true; // true veya false
        this.timeTrans = 3000; // geçiş süresi milisaniye cinsinden
        this.IndexElements = [];

        // Slayt indekslerini IndexElements dizisine ekliyoruz
        for (let i = 0; i < this.totalSlides; i++) {
            this.IndexElements.push(i);
        }

        // Başlangıçta mevcut slayt ve noktayı ayarlıyoruz
        this.setCurret();
        // Olayları başlatıyoruz (tıklamalar ve otomatik oynatma)
        this.initEvents();
    }

    // Mevcut slaytı ve noktayı ayarlar
    setCurret() {
        this.Slides[this.current].classList.add('current');
        this.Nav[this.current].classList.add('current_dot');
    }

    // Tıklama olayları ve otomatik oynatma için olayları başlatır
    initEvents() {
        const self = this;

        // Noktalardan her biri için tıklama olayını ekliyoruz
        this.Nav.forEach((dot) => {
            dot.addEventListener('click', (ele) => {
                ele.preventDefault();
                // Tıklanan noktanın indeksine göre slaytı değiştiriyoruz
                this.changeSlide(this.Nav.indexOf(dot));
            });
        });

        // Slaytın üzerine gelindiğinde otomatik oynatmayı durduruyoruz
        this.el.addEventListener('mouseenter', () => self.autoPlay = false);
        // Slaytın üzerinden çıkıldığında otomatik oynatmayı tekrar başlatıyoruz
        this.el.addEventListener('mouseleave', () => self.autoPlay = true);

        // Belirlediğimiz süre aralıklarıyla otomatik oynatma işlemini gerçekleştiriyoruz
        setInterval(function () {
            if (self.autoPlay) {
                // Eğer otomatik oynatma açıksa, mevcut slaytı bir sonraki slayta değiştiriyoruz
                self.current = self.current < self.Slides.length - 1 ? self.current + 1 : 0;
                self.changeSlide(self.current);
            }
        }, this.timeTrans);
    }

    // Slaytı değiştirir
    changeSlide(index) {
        // Tüm noktalardan 'current_dot' sınıfını kaldırıyoruz
        this.Nav.forEach((allDot) => allDot.classList.remove('current_dot'));

        // Tüm slaytlardan 'prev' ve 'current' sınıflarını kaldırıyoruz
        this.Slides.forEach((allSlides) => allSlides.classList.remove('prev', 'current'));

        // Mevcut slayttan önceki slaytları belirliyoruz
        const getAllPrev = value => value < index;
        const prevElements = this.IndexElements.filter(getAllPrev);

        // Önceki slaytlara 'prev' sınıfını ekliyoruz
        prevElements.forEach((indexPrevEle) => this.Slides[indexPrevEle].classList.add('prev'));

        // Yeni mevcut slayta 'current' sınıfını ekliyoruz
        this.Slides[index].classList.add('current');
        // Noktaya 'current_dot' sınıfını ekliyoruz
        this.Nav[index].classList.add('current_dot');
    }
}

// SliderClip sınıfından bir nesne oluşturup slider'ı başlatıyoruz
class Slide extends Component {
    componentDidMount() {
        const slider = new SliderClip(document.querySelector('.slider'));
    }

    render() {
        return (
            <section className="intro">
                <div className="slider">
                    <ul>
                        {/* Slaytların listesi */}
                        <li  style={{ backgroundImage: "url(https://ik.imagekit.io/lgf1wyqnvg/slide.jpg?updatedAt=1690828172304)"}}>

                        <div style={{color:"#653C36" }} className="center-y">
                                <h3>Meriz Palet</h3>
                                <a href="#Contact" style={{color:"#653C36" }}>İletişim</a> {/* Proje içerikleri eklendi */}
                            </div>
                        </li>
                        <li style={{ backgroundImage: "url(https://ik.imagekit.io/lgf1wyqnvg/slide-4.jpg?updatedAt=1690828525516)" }}>
                            <div className="center-y">
                                <h3>Türkiye Geneline Hizmet Vermekteyiz</h3>
                                {/*<a href="#"></a> /!* Proje içerikleri eklendi *!/*/}
                            </div>
                        </li>
                        <li style={{ backgroundImage: "url(https://ik.imagekit.io/lgf1wyqnvg/slide-2.jpg?updatedAt=1690828625047)" }}>
                            <div className="center-y">
                                <h3>Türkiyenin En Kaliteli Paletleri</h3>
                                {/*<a href="#"></a> /!* Proje içerikleri eklendi *!/*/}
                            </div>
                        </li>
                    </ul>
                     {/*Noktaların listesi*/}
                    <nav>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                    </nav>
                </div>
            </section>
        );
    }
}

export default Slide;
