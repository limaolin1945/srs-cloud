.PHONY: default build install run uninstall upgrade test npm

SRS_PREFIX=/usr/local/srs-cloud
__REAL_INSTALL=$(DESTDIR)$(SRS_PREFIX)

default:
	@echo "Usage: make build|install|upgrade|test"
	@echo "     build       Build the project, npm install and build the ui"
	@echo "     install     Copy files for installer"
	@echo "     upgrade     Build for upgrade"
	@echo "     test     	Run tests"

npm:
	@cd mgmt && npm install

build: npm
	@cd platform && npm install
	@cd platform/ui && npm install
	@cd releases && make
	@cd mgmt && npm run build
	@cd platform && npm run build

upgrade:
	@cd mgmt && npm install
	@cd mgmt && npm run upgrade

install: npm
	@mkdir -p $(__REAL_INSTALL)
	@rm -rf $(__REAL_INSTALL)/mgmt $(__REAL_INSTALL)/js-core
	@ln -sf `pwd`/mgmt $(__REAL_INSTALL)/mgmt
	@ln -sf `pwd`/js-core $(__REAL_INSTALL)/js-core
	@rm -rf $(__REAL_INSTALL)/usr
	@cp -rf usr $(__REAL_INSTALL)/usr
	@sed -i "s|/usr/local/srs-cloud|$(SRS_PREFIX)|g" $(__REAL_INSTALL)/usr/lib/systemd/system/srs-cloud.service

uninstall:
	@echo "rmdir $(SRS_PREFIX)"
	@rm -rf $(SRS_PREFIX)

test:
	@cd platform && npm test
	@cd platform/ui && npm test
	@cd mgmt && npm test
	@cd releases && go test ./...

