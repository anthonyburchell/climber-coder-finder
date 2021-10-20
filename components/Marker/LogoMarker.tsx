import { MouseEventHandler } from "react";
import { Office } from "client";
import { MouseEvent } from "react";
import styles from "./Marker.module.css";
import googleMapReact from "google-map-react";

export interface MarkerProps {
  office: Office;
  lat: number;
  lng: number;
  onClick: MouseEventHandler<HTMLDivElement>;
}

function LogoMarker({ office, onClick }: MarkerProps) {
  return (
    <div onClick={onClick} className={styles.marker}>
      <span className={styles.hovertext} data-hover="Click here for this office's info">
        <svg className="wpe-logo" width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 4.28238L4.28235 0H18.0078V18.0079H0V4.28238ZM18.9961 0H37.0039V13.7255L32.6118 18.0079H23.2784L18.9961 13.7255V0ZM42.2745 18.9961L37.9921 23.2784V32.7216L42.2745 37.0039H56V18.9961H42.2745ZM18.9961 56H37.0039V42.2745L32.6118 37.9922H23.2784L18.9961 42.2745V56ZM56 56V42.2745L51.7176 37.9922H37.9921V56H56ZM37.9921 0V13.7255L42.2745 18.0079H56V0H37.9921ZM25.4745 28C25.4745 29.3176 26.5726 30.5255 28 30.5255C29.4275 30.5255 30.5255 29.4275 30.5255 28C30.5255 26.6824 29.4275 25.4745 28 25.4745C26.6824 25.4745 25.4745 26.5725 25.4745 28ZM18.0078 18.9961H0V37.0039H13.6157L18.0078 32.7216V18.9961ZM13.6157 37.9922L18.0078 42.2745V51.7177L13.6157 56H0V37.9922H13.6157Z" fill="#0ECAD4"/>
        </svg>
      </span>
    </div>
  );
}

export default LogoMarker;
