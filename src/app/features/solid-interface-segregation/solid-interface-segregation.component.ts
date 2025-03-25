import { Component, signal, WritableSignal } from '@angular/core';
import { CodeHighLightComponent } from '../../shared/components/code-highlight/code-highlight.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-solid-interface-segregation',
  imports: [CodeHighLightComponent, MatIconModule],
  templateUrl: './solid-interface-segregation.component.html',
  styleUrl: './solid-interface-segregation.component.scss',
})
export default class SolidInterfaceSegregationComponent {
  constructor() {}

  public beforeCode: WritableSignal<string> = signal(`interface VPNConnection {
  useL2TP: () => void;
  useOpenVPN: () => void;
  useV2Ray: () => void;
  useShadowsocks: () => void;
}

class ExternalNetwork implements VPNConnection {
  useL2TP() {
    console.log("L2TP VPN is ready for your external network!");
  }

  useOpenVPN() {
    console.log("OpenVPN is ready for your external network!");
  }

  useV2Ray() {
    console.log("V2Ray is ready for your external network!");
  }

  useShadowsocks() {
    console.log("Shadowsocks is ready for your external network!");
  }
}

class InternalNetwork implements VPNConnection {
  useL2TP() {
    console.log("L2TP VPN is ready for your internal network!");
  }

  useOpenVPN() {
    console.log("OpenVPN is ready for your internal network!");
  }

  useV2Ray() {
    throw Error("V2Ray is not available for your internal network!");
  }

  useShadowsocks() {
    throw Error("Shadowsocks is not available for your internal network!");
  }
}
`);

  public afterCode: WritableSignal<string> =
    signal(`interface BaseVPNConnection {
  useL2TP: () => void;
  useOpenVPN: () => void;
}

interface ExtraVPNConnection {
  useV2Ray: () => void;
  useShadowsocks: () => void;
}

class ExternalNetwork implements BaseVPNConnection, ExtraVPNConnection {
  useL2TP() {
    console.log("L2TP VPN is ready for your external network!");
  }

  useOpenVPN() {
    console.log("OpenVPN is ready for your external network!");
  }

  useV2Ray() {
    console.log("V2Ray is ready for your external network!");
  }

  useShadowsocks() {
    console.log("Shadowsocks is ready for your external network!");
  }
}

class InternalNetwork implements BaseVPNConnection {
  useL2TP() {
    console.log("L2TP VPN is ready for your internal network!");
  }

  useOpenVPN() {
    console.log("OpenVPN is ready for your internal network!");
  }
}
`);
}
