import { useEffect, useState } from "react";
import { imgDB, txtDB } from "./TxtimgConfig";
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

function StorageImageText() {
    const [txt, setTxt] = useState('');
    const [img, setImg] = useState('');
    const [data, setData] = useState([]);

    const handleUpload = (e) => {
        const imgs = ref(imgDB, `Imgs/${v4()}`);
        uploadBytes(imgs, e.target.files[0]).then(data => {
            getDownloadURL(data.ref).then(val => {
                setImg(val);
            });
        });
    }

    const handleClick = async () => {
        const valRef = collection(txtDB, 'txtData');
        await addDoc(valRef, { txtVal: txt, imgUrl: img });
        alert("Data added successfully");
    }

    const getData = () => {
        const valRef = collection(txtDB, 'txtData');
        onSnapshot(valRef, (snapshot) => {
            const allData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setData(allData);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <input onChange={(e) => setTxt(e.target.value)} /><br />
            <input type="file" onChange={(e) => handleUpload(e)} /><br />
            <button onClick={handleClick}>Add</button>
            {
                data.map(value =>
                    <div key={value.id}>
                        <h1>{value.txtVal}</h1>
                        <img src={value.imgUrl} height="500px" width="500px" alt="Uploaded" />
                    </div>)
            }
        </>
    );
}

export default StorageImageText;
