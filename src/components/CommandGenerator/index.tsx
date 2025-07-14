import { useState, useRef } from 'react';
import styles from './styles.module.css';

export default function (): JSX.Element {
  const [selectValue, setSelectValue] = useState('group');
  const [body, setBody] = useState('');
  const [target, setTarget] = useState('');
  const [selfPlatform, setSelfPlatform] = useState('');
  const [selfId, setSelfId] = useState('');
  const [autoEscape, setAutoEscape] = useState<'unset' | 'true' | 'false'>('unset');
  const [asSegments, setAsSegments] = useState<'unset' | 'true' | 'false'>('unset');
  const [useUnicode, setUseUnicode] = useState<'unset' | 'true' | 'false'>('unset');
  const [output, setOutput] = useState('');
  const [showBodyError, setShowBodyError] = useState(false);
  const [useShortType, setUseShortType] = useState(false);
  
  const bodyInputRef = useRef<HTMLInputElement>(null);

  // 类型简写映射
  const typeShortMap: Record<string, string> = {
    'guild': 'guild',      // 无简写
    'channel': 'c',
    'group': 'g',
    'private': 'p',
    'reply': 'r',
    'data': 'd',
    'server': 's',
    'bind': 'b',
    'unbind': 'ub',
    'javascript': 'js',
    'cmd': 'cmd',          // 无简写
    'debug': 'debug'       // 无简写
  };

  // 三态切换函数
  const toggleTriState = (current: 'unset' | 'true' | 'false'): 'unset' | 'true' | 'false' => {
    switch (current) {
      case 'unset': return 'true';
      case 'true': return 'false';
      case 'false': return 'unset';
      default: return 'unset';
    }
  };

  const handleGenerate = () => {
    // 检查主体是否为空
    if (!body.trim()) {
      setShowBodyError(true);
      bodyInputRef.current?.focus();
      return;
    }
    
    setShowBodyError(false);
    
    // 构建参数
    const params: string[] = [];
    if (target) {
      params.push(`target=${target}`);
    }
    if (autoEscape !== 'unset') {
      params.push(`auto_escape=${autoEscape}`);
    }
    if (asSegments !== 'unset') {
      params.push(`as_segments=${asSegments}`);
    }
    if (useUnicode !== 'unset') {
      params.push(`use_unicode=${useUnicode}`);
    }
    if (selfPlatform) {
      params.push(`self.platform=${selfPlatform}`);
    }
    if (selfId) {
      params.push(`self.id=${selfId}`);
    }

    const paramString =
      params.length > 1 || (params.length === 1 && !target)
        ? params.join(',')
        : params.length > 0
        ? target
        : '';

    // 使用简写或全称
    const typeString = useShortType ? typeShortMap[selectValue] : selectValue;
    const result = `[${typeString}${
      paramString ? ':' + paramString : ''
    }]${body}`;

    setOutput(result);
  };

  const handleReset = () => {
    setSelectValue('group');
    setBody('');
    setTarget('');
    setSelfPlatform('');
    setSelfId('');
    setAutoEscape('unset');
    setAsSegments('unset');
    setUseUnicode('unset');
    setOutput('');
    setShowBodyError(false);
    setUseShortType(false);
  };

  return (
    <div id={styles.container}>
      <div className={styles.formSection}>
        <h3>配置选项</h3>
        <div className={styles.field}>
          <label htmlFor="selectOption">类型</label>
          <div className={styles.typeSection}>
            <select
              id="selectOption"
              value={selectValue}
              onChange={(e) => {
                const newValue = e.target.value;
                setSelectValue(newValue);
                // 如果新选择的类型没有简写，自动取消简写选项
                if (typeShortMap[newValue] === newValue) {
                  setUseShortType(false);
                }
              }}
              className={styles.select}
            >
              <option value="guild">发送群组消息（Guild）</option>
              <option value="channel">发送频道消息（Channel）</option>
              <option value="group">发送群聊消息（Group）</option>
              <option value="private">发送私聊消息（Direct/Private）</option>
              <option value="reply">发送回复</option>
              <option value="data">通过 连接功能 发送文本</option>
              <option value="server">发送指令到服务器</option>
              <option value="bind">绑定</option>
              <option value="unbind">解绑</option>
              <option value="javascript">在插件的 Js 引擎中执行代码</option>
              <option value="cmd">执行 Shell 命令</option>
              <option value="debug">调试输出</option>
            </select>
            <div className={styles.typeOption}>
              <label className={`${styles.simpleCheckboxLabel} ${typeShortMap[selectValue] === selectValue ? styles.disabled : ''}`}>
                <input
                  type="checkbox"
                  checked={useShortType}
                  onChange={(e) => setUseShortType(e.target.checked)}
                  disabled={typeShortMap[selectValue] === selectValue}
                  className={styles.checkbox}
                />
                使用简写形式
                {useShortType && typeShortMap[selectValue] !== selectValue && (
                  <span className={styles.shortPreview}>({typeShortMap[selectValue]})</span>
                )}
                {typeShortMap[selectValue] === selectValue && (
                  <span className={styles.noShortText}>(无简写)</span>
                )}
              </label>
            </div>
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="type">主体</label>
          <input
            ref={bodyInputRef}
            id="type"
            type="text"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
              if (showBodyError && e.target.value.trim()) {
                setShowBodyError(false);
              }
            }}
            placeholder="命令主体"
            className={`${styles.input} ${showBodyError ? styles.inputError : ''}`}
          />
          {showBodyError && (
            <span className={styles.errorMessage}>
              请输入命令主体内容
            </span>
          )}
        </div>{' '}
        <h3>参数</h3>
        <div className={styles.field}>
          <label htmlFor="target">目标 ID（target）</label>
          <input
            id="target"
            type="text"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            placeholder="群聊/用户/服务器/插件 Id"
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <div className={styles.checkboxGroup}>
            <div className={styles.triStateCheckbox}>
              <input
                type="checkbox"
                id="autoEscape"
                checked={autoEscape === 'true'}
                ref={(input) => {
                  if (input) input.indeterminate = autoEscape === 'unset';
                }}
                onChange={() => setAutoEscape(toggleTriState(autoEscape))}
                className={`${styles.checkbox} ${autoEscape === 'false' ? styles.checkboxFalse : ''}`}
              />
              <label htmlFor="autoEscape" className={styles.checkboxLabel}>
                自动转义 (auto_escape) - 仅OneBot V11适配器
                <span className={styles.stateIndicator}>
                  {autoEscape === 'unset' ? '未设置' : autoEscape === 'true' ? 'true' : 'false'}
                </span>
              </label>
            </div>

            <div className={styles.triStateCheckbox}>
              <input
                type="checkbox"
                id="asSegments"
                checked={asSegments === 'true'}
                ref={(input) => {
                  if (input) input.indeterminate = asSegments === 'unset';
                }}
                onChange={() => setAsSegments(toggleTriState(asSegments))}
                className={`${styles.checkbox} ${asSegments === 'false' ? styles.checkboxFalse : ''}`}
              />
              <label htmlFor="asSegments" className={styles.checkboxLabel}>
                分段发送 (as_segments) - 仅OneBot V12适配器
                <span className={styles.stateIndicator}>
                  {asSegments === 'unset' ? '未设置' : asSegments === 'true' ? 'true' : 'false'}
                </span>
              </label>
            </div>

            <div className={styles.triStateCheckbox}>
              <input
                type="checkbox"
                id="useUnicode"
                checked={useUnicode === 'true'}
                ref={(input) => {
                  if (input) input.indeterminate = useUnicode === 'unset';
                }}
                onChange={() => setUseUnicode(toggleTriState(useUnicode))}
                className={`${styles.checkbox} ${useUnicode === 'false' ? styles.checkboxFalse : ''}`}
              />
              <label htmlFor="useUnicode" className={styles.checkboxLabel}>
                使用Unicode编码 (use_unicode)
                <span className={styles.stateIndicator}>
                  {useUnicode === 'unset' ? '未设置' : useUnicode === 'true' ? 'true' : 'false'}
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.inputGroup}>
            <div>
              <label htmlFor="selfId">发送者 Id（self.id）</label>
              <input
                id="selfId"
                type="text"
                autoComplete="off"
                value={selfId}
                onChange={(e) => setSelfId(e.target.value)}
                placeholder="用户 Id"
                className={styles.input}
              />
            </div>

            <div>
              <label htmlFor="selfPlatform">发送者平台（self.platform）</label>
              <input
                id="selfPlatform"
                type="text"
                autoComplete="off"
                value={selfPlatform}
                onChange={(e) => setSelfPlatform(e.target.value)}
                placeholder="平台名称（如: qq）"
                className={styles.input}
              />
            </div>
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <button onClick={handleGenerate} className={styles.generateButton}>
            生成
          </button>
          <button onClick={handleReset} className={styles.resetButton}>
            重置
          </button>
        </div>
      </div>

      <div className={styles.outputSection}>
        <h3>输出</h3>
        <pre className={styles.output}>
          <code>{output || '点击"生成"按钮查看结果'}</code>
        </pre>
      </div>
    </div>
  );
}
