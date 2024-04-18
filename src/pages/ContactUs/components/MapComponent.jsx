
import { useState } from "react";
import { Map, APIProvider, Marker, InfoWindow } from "@vis.gl/react-google-maps";
import { useToast } from "@chakra-ui/react";
import address from "../js/address";
const MapComponent = () => {
    const api = 'AIzaSyBsjaYpcqQsuXso2ZmNYIWvhm7Pnr9h-tU';

    const locations = [
        { lat: 48.8566, lng: 2.3522 },
        { lat: 40.4168, lng: -3.7038 },
        { lat: 52.5200, lng: 13.4050 },
    ];

    const toast = useToast();
    const copyText = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                toast({
                    title: 'Text Copied!',
                    description: 'The text has been copied to your clipboard.',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                });
            })
            .catch((err) => {
                toast({
                    title: 'Error Copying Text',
                    description: err.message,
                    status: 'error',
                    isClosable: true,
                });
            });
    };
    return <>
        <APIProvider apiKey={api}>
            <Map
                style={{ width: 'auto', height: '420px' }}
                defaultCenter={{ lat: 48.4637, lng: 2.2945 }}
                defaultZoom={4}
                gestureHandling={'greedy'}
                disableDefaultUI={false}
            >
                {
                    locations.map((locationCredentials) => {
                        const [infowindowShown, setInfowindowShown] = useState(false);
                        const [addressData, setAddressData] = useState(null);
                        const [error, setError] = useState(null);

                        async function getAddress(apiKey, lat, lng) {
                            try {
                                const result = await address({ apiKey, lat, lng });
                                setAddressData(result);
                            } catch (error) {
                                setError(error.message);
                            }
                        };

                        function closeInfoWIndowTimer() {
                            setTimeout(() => {
                                setInfowindowShown(false);
                            }, 3000);
                        };

                        return <>
                            <Marker
                                position={locationCredentials}
                                onClick={() => {
                                    setInfowindowShown(true);
                                    getAddress(api, locationCredentials.lat, locationCredentials.lng);
                                    closeInfoWIndowTimer();
                                }} />
                            {
                                infowindowShown && <InfoWindow
                                    position={locationCredentials}
                                    onCloseClick={() => {
                                        setInfowindowShown(false);
                                    }}>

                                    {error ? (
                                        <p>Error fetching address: {error}</p>
                                    ) : (
                                        <button className="w-auto" onClick={() => copyText(addressData)}>
                                            <div className="flex gap-2 items-center overflow-hidden ">
                                                <div>
                                                    <box-icon type='solid' name='copy' size='sm'></box-icon>
                                                </div>
                                                <p>{addressData}</p>
                                            </div>
                                        </button>
                                    )}
                                </InfoWindow>
                            }
                        </>

                    })
                }
            </Map>
        </APIProvider>
    </>
}

export default MapComponent;