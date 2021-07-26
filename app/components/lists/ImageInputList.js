import React, { useRef, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from '../inputs/ImageInput';

function ImageInputList(props) {
    const [imageUris, setFieldValue] = useState([]);
    const scrollView = useRef();

    const handleAdd = (uri) => {
        setFieldValue([...imageUris, uri]);
    };

    const handleRemove = (uri) => {
        setFieldValue(
            imageUris.filter((imageUri) => imageUri !== uri)
        );
    };

    const onContentSizeChangeHandler = () => scrollView.current.scrollToEnd();

    return (
        <View>
            <ScrollView horizontal ref={scrollView} onContentSizeChange={onContentSizeChangeHandler}>
                <View style={styles.container}>
                    {imageUris.map((uri) => (
                        <View key={uri} style={styles.imageContainer}>
                            <ImageInput
                                imageUri={uri}
                                onChangeImage={() => handleRemove(uri)}
                            />
                        </View>
                    ))}
                    <ImageInput onChangeImage={(uri) => handleAdd(uri)} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 40
    },
    imageContainer: {
        marginRight: 4
    }
});

export default ImageInputList;