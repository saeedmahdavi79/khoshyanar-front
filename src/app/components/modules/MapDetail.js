// components/MapComponent.js
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import ImageLoc from "../../../../public/image/location.png"
import { Location02Icon } from 'hugeicons-react';
import baseUrlIcon from '@/utils/baseIcon';
// برای نمایش آیکون مارکر
delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconUrl: require("../../../../public/image/location.png"), // آدرس آیکون جدید
//   iconSize: [25, 41], // اندازه آیکون
//   iconAnchor: [12, 41], // نقطه کانونی
//   popupAnchor: [1, -34], // نقطه کانونی پنجره پاپاپ
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
//   shadowSize: [41, 41],
//     // iconUrl: require("../../../../public/image/location.png"),
//     // shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

const customIcon = new L.Icon({
  iconUrl: baseUrlIcon("location.svg"), // آدرس آیکون جدید
  iconSize: [45, 61], // اندازه آیکون
  iconAnchor: [12, 41], // نقطه کانونی
  popupAnchor: [1, -34], // نقطه کانونی پنجره پاپاپ
  // shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  shadowSize: [41, 41],
});

const MapDetail = ({latlon}) => {
    const [position, setPosition] = useState(latlon); // موقعیت پیش فرض (تهران)
    const [userLocation, setUserLocation] = useState(null);

    const MapClickHandler = () => {
        useMapEvents({
            click: (e) => {
                setUserLocation([e.latlng.lat, e.latlng.lng]);
            },
        });
        return null;
    };

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setPosition([position.coords.latitude, position.coords.longitude]);
        });
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return (
        <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={latlon} icon={customIcon}>
                <Popup>موقعیت ثبت شده مشتری</Popup>
            </Marker>
            {/* {userLocation && (
                <Marker position={userLocation}>
                    <Popup>موقعیت انتخاب شده: {userLocation[0]}, {userLocation[1]}</Popup>
                </Marker>
            )} */}
            <MapClickHandler />
        </MapContainer>
    );
};

export default MapDetail;
