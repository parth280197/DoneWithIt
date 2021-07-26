import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from '../inputs/ImageInput';

function ImageInputList({ imageUris, onAddImage, onRemoveImage }) {
    const scrollView = useRef();

    const onContentSizeChangeHandler = () => scrollView.current.scrollToEnd();

    return (
        <View>
            <ScrollView horizontal ref={scrollView} onContentSizeChange={onContentSizeChangeHandler}>
                <View style={styles.container}>
                    {imageUris.map((uri) => (
                        <View key={uri} style={styles.imageContainer}>
                            <ImageInput
                                imageUri={uri}
                                onChangeImage={() => onRemoveImage(uri)}
                            />
                        </View>
                    ))}
                    <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
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