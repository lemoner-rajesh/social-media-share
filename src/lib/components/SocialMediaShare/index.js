import React, { useState } from 'react'
import Linkedin from "./assets/share-linkedin.svg";
import Twitter from "./assets/share-twitter.svg";
import Fb from "./assets/share-fb.svg";
import Whatsapp from "./assets/share-whatsapp.svg";
import CopyBlack from "./assets/share-copy-black.svg";
import CopyWhite from "./assets/share-copy-white.svg";
import podcastShareBlack from "./assets/share-black.svg";
import podcastShareWhite from "./assets/share-white.svg";
import "./index.css";

export default function NewsCardsShare({ title, pageSlug, isDark }) {

    const [showCopy, setShowCopy] = useState(false);
    const [showSocialShare, setShowSocialShare] = useState(false)

    function shareWhatsapp(shareUrl, title) {
        // var mainURL = shareUrl;//window.location.origin + shareUrl;
        
        if (typeof window !== `undefined`) {
            var mainURL = window.location.origin + shareUrl;
            window.open(`https://wa.me/?text=` + encodeURIComponent(mainURL));
        }

    }
    function shareFB(shareUrl, title) {
        // var mainURL = shareUrl;//window.location.origin + shareUrl;
        
        if (typeof window !== `undefined`) {
            var mainURL = window.location.origin + shareUrl;
            window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(mainURL) + "&t=" + title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=420,width=650');
        }
    }
    function shareTwitter(shareUrl, title) {
        // var mainURL = shareUrl;//window.location.origin + shareUrl;
        
        if (typeof window !== `undefined`) {
            var mainURL = window.location.origin + shareUrl;
            window.open("https://twitter.com/share?url=" + encodeURIComponent(mainURL) + "&text=" + title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=420,width=650');
        }
    }
    function shareLinkedin(shareUrl, title) {
        // var mainURL = shareUrl;//window.location.origin + shareUrl;
        
        if (typeof window !== `undefined`) {
            var mainURL = window.location.origin + shareUrl;
            window.open("http://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(mainURL) + "&title=" + title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=420,width=650');
        }
    }
    // function shareEmail(shareUrl, title) {
    //     var mainURL = shareUrl;//window.location.origin + shareUrl;

    //     if (typeof window !== `undefined`) {
    //         window.open("mailto:?subject=" + title + "&body= Check out this article " + encodeURIComponent(mainURL), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=420,width=650');
    //     }
    // }

    function Clipboard_CopyTo(value) {
        if (typeof window !== `undefined`) {
        var tempInput = document.createElement("input");
        tempInput.value = window.location.origin + value;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        // document.getElementById('linkCopiedText').classList.add('on');
        setShowCopy(true)
        setTimeout(function () {
            // document.getElementById('linkCopiedText').classList.remove('on');
            setShowCopy(false)
        }, 2000);

        // setShowCopy(true)
    }

    }

    

    return (
        <ul className={`socialbx block-options ${isDark ? 'sociabx-black' : 'sociabx-white'}`}>
            <li>
                <a href='#/'  onClick={() => { Clipboard_CopyTo(pageSlug) }} className="sicons copy-share-icons">
                    <img src={isDark ? CopyBlack : CopyWhite} alt="img" />
                    {showCopy ? <span className='linkCopiedText'>Link Copied!</span> : null}
                </a>
            </li>
            <li>
                <a href='#/' className="sicons share-click copy-share-icons" onClick={() => setShowSocialShare(!showSocialShare)}>
                    <img src={isDark ? podcastShareBlack : podcastShareWhite} alt="img" />
                </a>
                <div className="alj-podcast-share-wrapper">
                    <div className={`alj-podcast-share ${showSocialShare ? "on" : ""}`}>
                        <div className="alj-chat-box">
                            <div className="alj-podcast-inner">
                                <div className="icon">
                                    <a href='#/' onClick={() => { shareWhatsapp(pageSlug, title) }}><img src={Whatsapp} alt='whatsapp_icon' /></a>
                                </div>
                                <div className="icon">
                                    <a href='#/'  onClick={() => { shareLinkedin(pageSlug, title) }}><img src={Linkedin} alt='linkedin-icon' /></a></div>
                                <div className="icon">
                                    <a href='#/' onClick={() => { shareFB(pageSlug, title) }}><img src={Fb} alt='facebook_icon' /></a></div>
                                <div className="icon">
                                    <a href='#/' onClick={() => { shareTwitter(pageSlug, title) }}><img src={Twitter} alt='twitter_icon' /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}