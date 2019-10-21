import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Pdf from 'react-native-pdf';

import { getDateForSample } from 'library/utilities/date';

export default function PDFScreen() {
  const name = 'Caroline';
  const quantity = 2;
  const dateOfRequest = getDateForSample(new Date().getTime());

  const [source, setSource] = useState<any>(null);
  useEffect(() => {
    const options = {
      html: getHTML(name, quantity, dateOfRequest),
      fileName: 'Sample-request-receipt',
      directory: 'Documents',
    };

    RNHTMLtoPDF.convert(options).then((file: any) =>
      setSource({ uri: file.filePath, cache: false }),
    );
  }, []);

  return (
    <View style={styles.container}>
      {source && (
        <Pdf
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          style={styles.pdf}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

function getHTML(name: string, quantity: number, dateOfRequest: string) {
  return `
    <style>
      .container {
        padding: 30px;
      }
      .header {
        margin-bottom: 26px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      .header-icon {
        width: 70px;
        height: 70px;
      }
      .header-title {
        margin-left: 12px;
        color: #000;
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        line-height: 36px;
      }
    </style>
    <div class="container">
      <div class="header">
        <svg
          width='43'
          height='43'
          viewBox='0 0 43 43'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          class="header-icon"
        >
          <path
            d='M21.5 0C9.64493 0 0 9.64493 0 21.5C0 33.3551 9.64493 43 21.5 43C33.3551 43 43 33.3551 43 21.5C42.9992 9.64493 33.3551 0 21.5 0ZM21.5 39.5346C11.5555 39.5346 3.46535 31.4445 3.46535 21.4992C3.46535 11.5548 11.5555 3.46458 21.5 3.46458C31.4445 3.46458 39.5346 11.5555 39.5346 21.5C39.5346 31.4445 31.4445 39.5346 21.5 39.5346Z'
            fill='#2FD396'
          />
          <path
            d='M28.3535 14.6442L18.3179 24.6805L14.6457 21.0083C13.9694 20.3312 12.8725 20.3312 12.1962 21.0083C11.5192 21.6845 11.5192 22.7815 12.1962 23.4577L17.0936 28.355C17.4317 28.6932 17.8756 28.863 18.3187 28.863C18.7618 28.863 19.2049 28.6939 19.543 28.355L30.8037 17.0944C31.4799 16.4174 31.4799 15.3212 30.8037 14.6442C30.1267 13.9679 29.0305 13.9679 28.3535 14.6442Z'
            fill='#2FD396'
          />
        </svg>
        
        <div class="header-title">Confirmed</div>
      </div>

      <div>
      </div>
    </div>
  `;
}
