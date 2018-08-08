import React, { Component } from 'react';
import {
  StyleSheet,
  Modal
} from 'react-native';

const Loader = props => {
  const {
    loading,
    ...attributes
  } = props;

return (
    <Modal
      visible={loading}></Modal>
  )
}

const styles = StyleSheet.create({

});

export default Loader;