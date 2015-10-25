IMAGE_TAG = ottogiron/hapiseed

all: docker-build

docker-build:
	docker build --no-cache -f docker/Dockerfile -t $(IMAGE_TAG) .

.PHONY: docker-build
