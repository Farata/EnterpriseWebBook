[Constructor(DOMString url, optional (DOMString or DOMString[]) protocols)] //<1>
interface WebSocket : EventTarget {
  readonly attribute DOMString url;

  const unsigned short CONNECTING = 0;          //<2>
  const unsigned short OPEN = 1;
  const unsigned short CLOSING = 2;
  const unsigned short CLOSED = 3;
  readonly attribute unsigned short readyState;
  readonly attribute unsigned long bufferedAmount;

  // networking
  [TreatNonCallableAsNull] attribute Function? onopen;      //<3>
  [TreatNonCallableAsNull] attribute Function? onerror;
  [TreatNonCallableAsNull] attribute Function? onclose;
  readonly attribute DOMString extensions;
  readonly attribute DOMString protocol;                    //<4>
  void close([Clamp] optional unsigned short code, optional DOMString reason);

  // messaging
  [TreatNonCallableAsNull] attribute Function? onmessage;
           attribute DOMString binaryType;
  void send(DOMString data);            // <5>
  void send(ArrayBufferView data);
  void send(Blob data);
};