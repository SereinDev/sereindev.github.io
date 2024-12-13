import Admonition from '@theme/Admonition';
import { useRef, useState } from 'react';
import { saveAsFile } from '../../utils/file';
import styles from './styles.module.css';

declare type OldData = {
  type: 'REGEX';
  data: {
    Regex: string;
    expression: string;
    remark: string;
    command: string;
    area: number;
    isAdmin: boolean;
  }[];
};

export default function () {
  const ref = useRef<HTMLInputElement>(null);
  const [error, setError] = useState('');

  const handleConvert = () => {
    setError('');
    try {
      if (ref.current.files.length === 0) {
        throw '请选择文件';
      }

      const file = ref.current.files[0];
      if (file.name.split('.').pop() !== 'json') {
        throw '请选择JSON文件';
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const result = JSON.parse(e.target.result as string);
          console.log(result);
          convert(result as OldData);
        } catch (error) {
          setError(error);
        }
      };
      reader.readAsText(file);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <div id={styles['converter-container']}>
        <div id={styles['input-container']}>
          <input type="file" name="" id="" accept=".json" ref={ref} />
        </div>
        <div
          className="button button--secondary button--lg"
          onClick={handleConvert}
        >
          转换
        </div>
        {error ? (
          <div style={{ margin: '10px 0' }}>
            <Admonition type="warning">
              <p> {error} </p>
            </Admonition>
          </div>
        ) : null}
      </div>
    </>
  );
}

function convert(data: OldData) {
  if (data.type != 'REGEX') {
    throw '文件格式不正确';
  }

  const result = data.data.map((item) => {
    return {
      regExp: item['Regex'] || item.expression || '',
      fieldType: getFieldType(item.area) || 0,
      requireAdmin: item.isAdmin || false,
      exclusions: '',
      description: item.remark || '',
      command: item.command || '',
    };
  });

  saveAsFile(
    JSON.stringify(
      {
        type: 'System.Collections.ObjectModel.ObservableCollection`1[Serein.Core.Models.Commands.Match]',
        data: result,
      },
      null,
      2
    ),
    'matches.json'
  );
}

function getFieldType(area: number) {
  switch (area) {
    case 0:
    case 1:
      return area;

    case 2:
    case 3:
    case 4:
      return area + 1;

    default:
      throw '未知的area值';
  }
}
