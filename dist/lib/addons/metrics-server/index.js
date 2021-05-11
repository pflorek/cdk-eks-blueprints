"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsServerAddon = void 0;
const yaml_utils_1 = require("../../utils/yaml-utils");
class MetricsServerAddon {
    constructor(version) {
        this.version = version !== null && version !== void 0 ? version : "v0.4.1";
    }
    deploy(clusterInfo) {
        const manifestUrl = `https://github.com/kubernetes-sigs/metrics-server/releases/download/${this.version}/components.yaml`;
        const manifest = yaml_utils_1.loadExternalYaml(manifestUrl);
        clusterInfo.cluster.addManifest('my-resource', ...manifest);
    }
}
exports.MetricsServerAddon = MetricsServerAddon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvYWRkb25zL21ldHJpY3Mtc2VydmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVEQUEwRDtBQUUxRCxNQUFhLGtCQUFrQjtJQUkzQixZQUFZLE9BQWdCO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxhQUFQLE9BQU8sY0FBUCxPQUFPLEdBQUksUUFBUSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxNQUFNLENBQUMsV0FBd0I7UUFDM0IsTUFBTSxXQUFXLEdBQUcsdUVBQXVFLElBQUksQ0FBQyxPQUFPLGtCQUFrQixDQUFDO1FBQzFILE1BQU0sUUFBUSxHQUFHLDZCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9DLFdBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FDSjtBQWJELGdEQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2x1c3RlckFkZE9uLCBDbHVzdGVySW5mbyB9IGZyb20gXCIuLi8uLi9zdGFja3MvZWtzLWJsdWVwcmludC1zdGFja1wiO1xuaW1wb3J0IHsgbG9hZEV4dGVybmFsWWFtbCB9IGZyb20gXCIuLi8uLi91dGlscy95YW1sLXV0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBNZXRyaWNzU2VydmVyQWRkb24gaW1wbGVtZW50cyBDbHVzdGVyQWRkT24ge1xuXG4gICAgdmVyc2lvbjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodmVyc2lvbj86IHN0cmluZykge1xuICAgICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uID8/IFwidjAuNC4xXCI7XG4gICAgfVxuXG4gICAgZGVwbG95KGNsdXN0ZXJJbmZvOiBDbHVzdGVySW5mbyk6IHZvaWQge1xuICAgICAgICBjb25zdCBtYW5pZmVzdFVybCA9IGBodHRwczovL2dpdGh1Yi5jb20va3ViZXJuZXRlcy1zaWdzL21ldHJpY3Mtc2VydmVyL3JlbGVhc2VzL2Rvd25sb2FkLyR7dGhpcy52ZXJzaW9ufS9jb21wb25lbnRzLnlhbWxgO1xuICAgICAgICBjb25zdCBtYW5pZmVzdCA9IGxvYWRFeHRlcm5hbFlhbWwobWFuaWZlc3RVcmwpO1xuICAgICAgICBjbHVzdGVySW5mby5jbHVzdGVyLmFkZE1hbmlmZXN0KCdteS1yZXNvdXJjZScsIC4uLm1hbmlmZXN0KTtcbiAgICB9XG59Il19