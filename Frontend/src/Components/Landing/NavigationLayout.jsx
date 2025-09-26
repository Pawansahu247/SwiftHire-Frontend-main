import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OurTeam from './OurTeam';
import GrowYourTeam from './GrowYourTeam';
import YourEngineerBuild from './YourEngineerBuild';
import EveryHiringSolution from './EveryHiringSolution';
import WhomWeSupport from './WhomWeSupport';
import OurProduct from './OurProduct';
import EffortlessHiring from './EffortlessHiring';
import { useNavigate } from 'react-router-dom';
import Load from '../../assets/Load';
import { Outlet } from 'react-router-dom';
import ViewDemo, { VIDEO_URL } from './ViewDemo';

function NavigationLayout() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu
    const [isScrolled, setIsScrolled] = useState(false);
    const [showDemo, setShowDemo] = useState(false); // State for showing the demo modal
    const [showEmailDialog, setShowEmailDialog] = useState(false); // State for showing the email dialog
    const [showPhoneDialog, setShowPhoneDialog] = useState(false); // State for showing the phone dialog

    useEffect(() => {
        const startTime = Date.now();
        const minLoadTime = 2000; // 2 seconds minimum

        setTimeout(() => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, minLoadTime - elapsedTime);

            setTimeout(() => {
                setLoading(false);
            }, remainingTime);
        }, 0);

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const naviToSignIn = () => {
        navigate('/auth/signin');
    };

    const naviToTerms = () => {
        navigate('/terms', { replace: true }); // Replace current route
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
    };

    const naviToPrivacy = () => {
        navigate('/privacy', { replace: true }); // Replace current route
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
    };

    const naviToContact = () => {
        navigate('/contact', { replace: true }); // Replace current route
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
    };

    const naviToJoinAsInterviewer = () => {
        navigate('/join-as-interviewer', { replace: true }); // Replace current route
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
    };

    const navigateToHome = () => {
        navigate('/', { replace: true }); // Replace current route
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
    };

    const scrollToProduct = (e) => {
        e.preventDefault();
        if (window.location.pathname !== '/') {
            navigate('/', { replace: true });
            // Wait for navigation to complete before scrolling
            setTimeout(() => {
                const productSection = document.getElementById('product-section');
                if (productSection) {
                    const headerOffset = document.querySelector('.sticky').offsetHeight;
                    const elementPosition = productSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        } else {
            const productSection = document.getElementById('product-section');
            if (productSection) {
                const headerOffset = document.querySelector('.sticky').offsetHeight;
                const elementPosition = productSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    const scrollToAboutUs = (e) => {
        e.preventDefault();
        if (window.location.pathname !== '/') {
            navigate('/', { replace: true });
            setTimeout(() => {
                const aboutSection = document.getElementById('About-us-section');
                if (aboutSection) {
                    const headerOffset = document.querySelector('.sticky').offsetHeight;
                    const elementPosition = aboutSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        } else {
            const aboutSection = document.getElementById('About-us-section');
            if (aboutSection) {
                const headerOffset = document.querySelector('.sticky').offsetHeight;
                const elementPosition = aboutSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    const scrollToContactUs = (e) => {
        e.preventDefault();
        if (window.location.pathname !== '/') {
            navigate('/', { replace: true });
            setTimeout(() => {
                const contactSection = document.getElementById('contact-section');
                if (contactSection) {
                    const headerOffset = document.querySelector('.sticky').offsetHeight;
                    const elementPosition = contactSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        } else {
            const contactSection = document.getElementById('contact-section');
            if (contactSection) {
                const headerOffset = document.querySelector('.sticky').offsetHeight;
                const elementPosition = contactSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    {/* Dialog */ }
    const ConfirmDialog = ({ isOpen, onClose, onConfirm, title, message }) => {
        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="fixed inset-0 bg-black/40" onClick={onClose}></div>
                <div className="relative bg-white rounded-3xl w-[90%] md:max-w-md shadow-xl">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute right-3 top-3 md:right-4 md:top-4 text-gray-400 hover:text-gray-600 transition-colors p-2"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="md:w-6 md:h-6">
                            <path d="M18 6L6 18M6 6l12 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    {/* Content container */}
                    <div className="p-5 md:p-8">
                        {/* Title */}
                        <h3 className="text-[#E65F2B] text-xl md:text-2xl font-semibold mb-2 pr-8">
                            {title}
                        </h3>

                        {/* Message */}
                        <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">
                            {message}
                        </p>

                        {/* Buttons - Always side by side */}
                        <div className="flex flex-row justify-end gap-3">
                            <button
                                onClick={onClose}
                                className="px-5 py-2.5 rounded-full border-2 border-[#475569] text-[#475569] hover:bg-gray-100 transition-colors duration-300 text-base md:text-lg"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={onConfirm}
                                className="px-5 py-2.5 rounded-full bg-[#E65F2B] text-white hover:bg-[#d64e1a] transition-colors duration-300 text-base md:text-lg"
                            >
                                Proceed
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col min-h-screen font-montserrat-recrumeta">
            {loading ? (
                <div className="min-h-screen flex flex-col bg-[#EBDFD7] items-center justify-center">
                    <Load />
                </div>
            ) : (
                <>
                    {/* Header */}
                    <div className="sticky top-0 z-50 bg-white">
                        <div className={`w-full flex justify-between items-center py-2 px-4 md:px-2 ${isScrolled ? 'shadow-md' : ''}`}>
                            {/* Logo */}
                            <div className="flex items-center px-0 md:px-10 cursor-pointer" onClick={navigateToHome}>
                                <svg
                                    width="200"
                                    height="50"
                                    viewBox="0 0 600 150"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <text
                                        x="50%"
                                        y="50%"
                                        textAnchor="middle"
                                        alignmentBaseline="middle"
                                        fontFamily="sans-serif"
                                        fontWeight="bold"
                                        fontSize="90"
                                        fill="#000"
                                    >
                                        Swift
                                        <tspan fill="#E65F2B">Hire</tspan>
                                    </text>
                                </svg>

                            </div>

                            {/* Hamburger Menu Button */}
                            <button
                                className="md:hidden flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-200"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <svg
                                    className={`w-6 h-6 text-black transition-transform duration-500 ease-in-out ${isMenuOpen ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >

                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                    />
                                </svg>


                            </button>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex md:items-center md:gap-x-12">
                                <Link to="#" onClick={scrollToProduct} className="hover:text-[#E65F2B]">
                                    Product
                                </Link>
                                <Link to="#" onClick={scrollToContactUs} className="hover:text-[#E65F2B]">
                                    Pricing
                                </Link>
                                <Link to="#" onClick={scrollToAboutUs} className="hover:text-[#E65F2B]">
                                    About Us
                                </Link>
                            </div>

                            {/* Sign In and Join as Interviewer */}
                            <div className="hidden md:flex items-center gap-x-6 px-10">
                                <button onClick={naviToJoinAsInterviewer} className="text-[#E65F2B] font-medium whitespace-nowrap text-sm md:text-base">
                                    <span className="text-[16px] md:text-[18px] hover:underline">Join as interviewer</span>
                                </button>
                                <button
                                    onClick={naviToSignIn}
                                    className="w-[100px] md:w-[116px] h-[38px] md:h-[42px] flex justify-center items-center rounded-lg border-2 border-black text-sm md:text-base shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-sm transition-all duration-300 ease-in-out"
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        {isMenuOpen && (
                            <div className="md:hidden bg-white border-t border-gray-200 shadow-lg transition-all duration-2000 ease-in-out">
                                <div className="flex flex-col items-center gap-y-4 py-4 border-b border-gray-200">
                                    <Link to="#" onClick={(e) => {
                                        scrollToProduct(e);
                                        setIsMenuOpen(false);
                                    }} className="hover:text-[#E65F2B]">
                                        Product
                                    </Link>
                                    <Link to="#" onClick={(e) => {
                                        scrollToContactUs(e);
                                        setIsMenuOpen(false);
                                    }} className="hover:text-[#E65F2B]">
                                        Pricing
                                    </Link>
                                    <Link to="#" onClick={(e) => {
                                        scrollToAboutUs(e);
                                        setIsMenuOpen(false);
                                    }} className="hover:text-[#E65F2B]">
                                        About Us
                                    </Link>
                                    <button onClick={() => {
                                        naviToJoinAsInterviewer();
                                        setIsMenuOpen(false);
                                    }} className="text-[#E65F2B] font-medium whitespace-nowrap text-sm">
                                        Join as interviewer
                                    </button>
                                    <button
                                        onClick={() => {
                                            naviToSignIn();
                                            setIsMenuOpen(false);
                                        }}
                                        className="w-[100px] h-[38px] flex justify-center items-center rounded-lg border-2 border-black text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-sm transition-all duration-300 ease-in-out"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Main Content */}
                    <div className="flex-grow">
                        {window.location.pathname === '/' ? (
                            <>
                                <YourEngineerBuild />
                                <EveryHiringSolution />
                                <EffortlessHiring />

                                <WhomWeSupport />
                                <div id="product-section">
                                    <OurProduct />
                                </div>
                                <div id='About-us-section'>
                                    <OurTeam />
                                </div>
                                <div id='contact-section'>
                                    <GrowYourTeam />
                                </div>
                            </>
                        ) : (
                            <Outlet />
                        )}
                    </div>

                    {/* Footer */}
                    <div className="bg-[#0F172A]">
                        <footer className='w-full px-4 md:w-[95%] mx-auto text-[#E2E8F0]' >
                            {/* Footer content wrapper */}
                            <div className='w-full flex flex-col md:flex-row border-b-[1px] border-[#E2E8F0] py-8 md:py-0' >
                                {/* Logo and tagline section */}
                                <div className='w-full md:w-[30%] flex flex-col gap-y-4 items-start text-left mt-0 md:mt-6 pb-8 md:pb-16' >
                                    <div className="w-[260px] md:w-[300px]">
                                        <svg
                                            width="300"
                                            height="75"
                                            viewBox="0 0 600 150"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <text
                                                x="50%"
                                                y="50%"
                                                textAnchor="middle"
                                                alignmentBaseline="middle"
                                                fontFamily="sans-serif"
                                                fontWeight="bold"
                                                fontSize="90"
                                                fill="#fff"
                                            >
                                                Swift
                                                <tspan fill="#E65F2B">Hire</tspan>
                                            </text>
                                        </svg>

                                    </div>
                                    <div className='text-[22px] md:text-[28px] font-medium px-2' >
                                        <p>Your Engineers Build,</p>
                                        <p>We handle the interviews</p>
                                    </div>
                                </div>

                                {/* Social section - adjusted width and spacing */}
                                <div className='w-full md:w-[70%] flex flex-col md:flex-row items-start md:items-start justify-end mt-6 md:mt-12 pb-8 md:pb-10 gap-8 md:gap-24 pr-12 pl-2' >
                                    {/* Sitemap Section */}
                                    <div className='w-full md:w-auto flex flex-col gap-y-3 items-start' >
                                        <p className='font-semibold text-[#F0C274]'>Sitemap</p>
                                        <ul className='flex flex-col gap-y-3' >
                                            <li><a href='#' onClick={scrollToProduct} className='hover:text-[#E65F2B]' >Products</a></li>
                                            <li><a href='#' onClick={scrollToContactUs} className='hover:text-[#E65F2B]' >Pricing</a></li>
                                            <li><a href='#' onClick={scrollToAboutUs} className='hover:text-[#E65F2B]' >About Us</a></li>
                                            <li>
                                                <button onClick={() => setShowDemo(true)} className='group flex items-center gap-x-2 hover:text-[#E65F2B]'>
                                                    <span className='transition-colors duration-300'>
                                                        View Demo
                                                    </span>
                                                    <svg className='transition-all duration-300 group-hover:rotate-[-45deg]' width="25" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path className="fill-[#E2E8F0] group-hover:fill-[#E65F2B]" d="M15.586 11.6247L11.636 7.67469C11.4538 7.48609 11.353 7.23349 11.3553 6.97129C11.3576 6.70909 11.4628 6.45828 11.6482 6.27287C11.8336 6.08747 12.0844 5.9823 12.3466 5.98002C12.6088 5.97774 12.8614 6.07853 13.05 6.26069L18.707 11.9177C18.8002 12.0103 18.8741 12.1205 18.9246 12.2418C18.9751 12.3632 19.001 12.4933 19.001 12.6247C19.001 12.7561 18.9751 12.8862 18.9246 13.0075C18.8741 13.1289 18.8002 13.239 18.707 13.3317L13.05 18.9887C12.9578 19.0842 12.8474 19.1604 12.7254 19.2128C12.6034 19.2652 12.4722 19.2928 12.3394 19.2939C12.2066 19.2951 12.0749 19.2698 11.952 19.2195C11.8291 19.1692 11.7175 19.095 11.6236 19.0011C11.5297 18.9072 11.4555 18.7955 11.4052 18.6726C11.3549 18.5498 11.3296 18.4181 11.3307 18.2853C11.3319 18.1525 11.3595 18.0213 11.4119 17.8993C11.4643 17.7773 11.5405 17.6669 11.636 17.5747L15.586 13.6247H6C5.73478 13.6247 5.48043 13.5193 5.29289 13.3318C5.10536 13.1443 5 12.8899 5 12.6247C5 12.3595 5.10536 12.1051 5.29289 11.9176C5.48043 11.73 5.73478 11.6247 6 11.6247H15.586Z" />
                                                    </svg>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Contact Section */}
                                    <div className='w-full md:w-auto flex flex-col gap-y-3 items-start' >
                                        <p className='font-semibold text-[#F0C274]'>Contact Us</p>
                                        <ul className='flex flex-col gap-y-3'>
                                            <li className='group flex items-center gap-x-4 hover:text-[#E65F2B]'>
                                                <div>
                                                    <svg width="25" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20 4.96777H4C2.89543 4.96777 2 5.8632 2 6.96777V18.9678C2 20.0723 2.89543 20.9678 4 20.9678H20C21.1046 20.9678 22 20.0723 22 18.9678V6.96777C22 5.8632 21.1046 4.96777 20 4.96777Z"
                                                            className="stroke-[#475569] group-hover:stroke-[#E65F2B] transition-colors duration-300"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                        <path d="M22 7.96777L13.03 13.6678C12.7213 13.8612 12.3643 13.9638 12 13.9638C11.6357 13.9638 11.2787 13.8612 10.97 13.6678L2 7.96777"
                                                            className="stroke-[#475569] group-hover:stroke-[#E65F2B] transition-colors duration-300"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <a href="#" onClick={(e) => {
                                                        e.preventDefault();
                                                        setShowEmailDialog(true);
                                                    }}>
                                                        <p>swifthire.official@gmail.com</p>
                                                    </a>
                                                </div>
                                            </li>
                                            <li className='group flex items-center gap-x-2 hover:text-[#E65F2B]'>
                                                <div>
                                                    <svg width="25" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.366 11.6498C10.3045 13.2981 11.6696 14.6633 13.318 15.6018L14.202 14.3638C14.3442 14.1647 14.5543 14.0247 14.7928 13.9701C15.0313 13.9156 15.2814 13.9503 15.496 14.0678C16.9101 14.8413 18.4721 15.3062 20.079 15.4318C20.3298 15.4516 20.5638 15.5653 20.7345 15.7501C20.9052 15.9349 21 16.1772 21 16.4288V20.8908C21.0001 21.1384 20.9083 21.3772 20.7424 21.561C20.5765 21.7448 20.3483 21.8605 20.102 21.8858C19.572 21.9404 19.038 21.9678 18.5 21.9678C9.94 21.9678 3 15.0278 3 6.46777C3 5.92977 3.02733 5.39577 3.082 4.86577C3.10725 4.61947 3.22298 4.39129 3.40679 4.22541C3.5906 4.05952 3.82941 3.96772 4.077 3.96777H8.539C8.79056 3.96774 9.0329 4.06252 9.21768 4.23322C9.40247 4.40392 9.51613 4.638 9.536 4.88877C9.66157 6.49569 10.1265 8.05771 10.9 9.47177C11.0175 9.68634 11.0522 9.93651 10.9977 10.175C10.9431 10.4134 10.8031 10.6236 10.604 10.7658L9.366 11.6498ZM6.844 10.9928L8.744 9.63577C8.20465 8.47192 7.83522 7.23664 7.647 5.96777H5.01C5.00333 6.13444 5 6.30111 5 6.46777C5 13.9238 11.044 19.9678 18.5 19.9678C18.6667 19.9678 18.8333 19.9644 19 19.9578V17.3208C17.7311 17.1326 16.4959 16.7631 15.332 16.2238L13.975 18.1238C13.4287 17.9113 12.8981 17.6607 12.387 17.3738L12.329 17.3408C10.3677 16.2243 8.74344 14.6001 7.627 12.6388L7.594 12.5808C7.30678 12.0698 7.05615 11.5392 6.844 10.9928Z"
                                                            className="fill-[#475569] group-hover:fill-[#E65F2B] transition-colors duration-300" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <a href="#" onClick={(e) => {
                                                        e.preventDefault();
                                                        setShowPhoneDialog(true);
                                                    }}>
                                                        <p>+91-8815638774</p>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Connect Section */}
                                    <div className='w-full md:w-auto flex flex-col gap-y-3 items-start' >
                                        <p className='font-semibold text-[#F0C274]'>Connect with us</p>
                                        <ul className='flex flex-col gap-y-3'>
                                            <li className='flex items-center gap-x-4'>
                                                <div className='group hover:text-[#E65F2B]'>
                                                    <a href="https://www.linkedin.com/in/pawan247" target="_blank">
                                                        <svg width="38" height="38" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M29.8521 3.88448H5.1479C4.8702 3.88062 4.59446 3.93151 4.33643 4.03423C4.0784 4.13695 3.84313 4.28949 3.64406 4.48314C3.44499 4.6768 3.28602 4.90777 3.17622 5.16287C3.06642 5.41797 3.00795 5.6922 3.00415 5.9699V30.9657C3.00795 31.2434 3.06642 31.5177 3.17622 31.7728C3.28602 32.0279 3.44499 32.2588 3.64406 32.4525C3.84313 32.6461 4.0784 32.7987 4.33643 32.9014C4.59446 33.0041 4.8702 33.055 5.1479 33.0511H29.8521C30.1298 33.055 30.4055 33.0041 30.6635 32.9014C30.9216 32.7987 31.1568 32.6461 31.3559 32.4525C31.555 32.2588 31.7139 32.0279 31.8237 31.7728C31.9335 31.5177 31.992 31.2434 31.9958 30.9657V5.9699C31.992 5.6922 31.9335 5.41797 31.8237 5.16287C31.7139 4.90777 31.555 4.6768 31.3559 4.48314C31.1568 4.28949 30.9216 4.13695 30.6635 4.03423C30.4055 3.93151 30.1298 3.88062 29.8521 3.88448ZM11.7979 28.297H7.4229V15.172H11.7979V28.297ZM9.6104 13.3345C9.00703 13.3345 8.42838 13.0948 8.00173 12.6681C7.57509 12.2415 7.3354 11.6628 7.3354 11.0595C7.3354 10.4561 7.57509 9.87746 8.00173 9.45081C8.42838 9.02417 9.00703 8.78448 9.6104 8.78448C9.93079 8.74815 10.2552 8.77989 10.5625 8.87764C10.8698 8.9754 11.1529 9.13695 11.3934 9.35172C11.6339 9.56649 11.8264 9.82964 11.9581 10.1239C12.0899 10.4182 12.158 10.737 12.158 11.0595C12.158 11.3819 12.0899 11.7007 11.9581 11.995C11.8264 12.2893 11.6339 12.5525 11.3934 12.7672C11.1529 12.982 10.8698 13.1436 10.5625 13.2413C10.2552 13.3391 9.93079 13.3708 9.6104 13.3345ZM27.5771 28.297H23.2021V21.2532C23.2021 19.4886 22.575 18.3366 20.9854 18.3366C20.4935 18.3402 20.0144 18.4945 19.6129 18.7787C19.2113 19.0629 18.9065 19.4634 18.7396 19.9261C18.6254 20.2689 18.576 20.6299 18.5937 20.9907V28.2824H14.2187V15.1574H18.5937V17.0095C18.9912 16.3198 19.5692 15.7517 20.2656 15.3662C20.962 14.9808 21.7504 14.7926 22.5458 14.822C25.4625 14.822 27.5771 16.7032 27.5771 20.7428V28.297Z"
                                                                className="fill-[#475569] group-hover:fill-[#E65F2B] transition-colors duration-300" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div className='group hover:text-[#E65F2B]'>
                                                    <a href="https://www.instagram.com/_sahu_245" target="_blank">
                                                        <svg width="35" height="35" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.37496 0.884277H21.625C26.2916 0.884277 30.0833 4.67594 30.0833 9.34261V21.5926C30.0833 23.8359 29.1922 25.9873 27.6059 27.5736C26.0197 29.1598 23.8683 30.0509 21.625 30.0509H9.37496C4.70829 30.0509 0.916626 26.2593 0.916626 21.5926V9.34261C0.916626 7.09932 1.80777 4.94791 3.39401 3.36167C4.98026 1.77542 7.13167 0.884277 9.37496 0.884277ZM9.08329 3.80094C7.69091 3.80094 6.35555 4.35407 5.37098 5.33863C4.38642 6.3232 3.83329 7.65856 3.83329 9.05094V21.8843C3.83329 24.7864 6.18121 27.1343 9.08329 27.1343H21.9166C23.309 27.1343 24.6444 26.5812 25.6289 25.5966C26.6135 24.612 27.1666 23.2767 27.1666 21.8843V9.05094C27.1666 6.14886 24.8187 3.80094 21.9166 3.80094H9.08329ZM23.1562 5.98844C23.6397 5.98844 24.1033 6.1805 24.4452 6.52236C24.7871 6.86423 24.9791 7.32789 24.9791 7.81136C24.9791 8.29483 24.7871 8.75849 24.4452 9.10036C24.1033 9.44222 23.6397 9.63428 23.1562 9.63428C22.6727 9.63428 22.2091 9.44222 21.8672 9.10036C21.5253 8.75849 21.3333 8.29483 21.3333 7.81136C21.3333 7.32789 21.5253 6.86423 21.8672 6.52236C22.2091 6.1805 22.6727 5.98844 23.1562 5.98844ZM15.5 8.17594C17.4338 8.17594 19.2885 8.94417 20.6559 10.3116C22.0234 11.6791 22.7916 13.5337 22.7916 15.4676C22.7916 17.4015 22.0234 19.2561 20.6559 20.6236C19.2885 21.9911 17.4338 22.7593 15.5 22.7593C13.5661 22.7593 11.7114 21.9911 10.344 20.6236C8.97652 19.2561 8.20829 17.4015 8.20829 15.4676C8.20829 13.5337 8.97652 11.6791 10.344 10.3116C11.7114 8.94417 13.5661 8.17594 15.5 8.17594ZM15.5 11.0926C14.3396 11.0926 13.2268 11.5535 12.4064 12.374C11.5859 13.1945 11.125 14.3073 11.125 15.4676C11.125 16.6279 11.5859 17.7407 12.4064 18.5612C13.2268 19.3817 14.3396 19.8426 15.5 19.8426C16.6603 19.8426 17.7731 19.3817 18.5936 18.5612C19.414 17.7407 19.875 16.6279 19.875 15.4676C19.875 14.3073 19.414 13.1945 18.5936 12.374C17.7731 11.5535 16.6603 11.0926 15.5 11.0926Z"
                                                                className="fill-[#475569] group-hover:fill-[#E65F2B] transition-colors duration-300" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Copyright Section */}
                            <div className='w-full flex flex-col md:flex-row justify-between items-start text-left gap-y-4 md:gap-y-0 py-6 text-sm md:text-base' >
                                <div className="text-center md:text-left">
                                    © {new Date().getFullYear()} SwiftHire. All rights reserved.
                                </div>
                                <div className='flex gap-x-4 md:gap-x-8' >
                                    <span onClick={naviToTerms} className='hover:text-[#E65F2B] cursor-pointer'>Terms & Conditions</span>
                                    <span onClick={naviToPrivacy} className='hover:text-[#E65F2B] cursor-pointer'>Privacy Policy</span>
                                    <span onClick={naviToContact} className='hover:text-[#E65F2B] cursor-pointer'>Contact Us</span>
                                </div>
                            </div>

                            {/* Confirm Dialogs */}
                            <ConfirmDialog
                                isOpen={showEmailDialog}
                                onClose={() => setShowEmailDialog(false)}
                                onConfirm={() => {
                                    window.open('mailto:swifthire.official@gmail.com', '_blank');
                                    setShowEmailDialog(false);
                                }}
                                title="Send Email"
                                message="Would you like to send an email to swifthire.official@gmail.com?"
                            />

                            <ConfirmDialog
                                isOpen={showPhoneDialog}
                                onClose={() => setShowPhoneDialog(false)}
                                onConfirm={() => {
                                    window.location.href = 'tel:+918815638774';
                                    setShowPhoneDialog(false);
                                }}
                                title="Make Phone Call"
                                message="Would you like to call +91-8815638774?"
                            />
                        </footer>
                    </div>

                </>
            )}

            {/* ViewDemo component */}
            {showDemo && (
                <ViewDemo
                    isOpen={showDemo}
                    onClose={() => setShowDemo(false)}
                    videoUrl={VIDEO_URL}
                />
            )}
        </div>
    );
}

export { NavigationLayout as LandingNavigationLayout };